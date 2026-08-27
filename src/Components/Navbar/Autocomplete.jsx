import React, { useState, useEffect, useRef, useCallback } from "react";

// Simulated API – replace with your own data source
const fetchSuggestions = async (query) => {
  const mockData = [
    "Apple",
    "Banana",
    "Blueberry",
    "Cherry",
    "Coconut",
    "Grape",
    "Lemon",
    "Lime",
    "Mango",
    "Orange",
    "Papaya",
    "Peach",
    "Pear",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];
  await new Promise((resolve) => setTimeout(resolve, 200)); // simulate network delay
  return mockData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );
};

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const debounceTimer = useRef(null);

  // Fetch suggestions with debounce
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    if (!inputValue.trim()) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    setLoading(true);
    debounceTimer.current = setTimeout(async () => {
      const results = await fetchSuggestions(inputValue);
      setSuggestions(results);
      setIsOpen(results.length > 0);
      setLoading(false);
      setActiveIndex(-1);
    }, 300);

    return () => clearTimeout(debounceTimer.current);
  }, [inputValue]);

  const handleSelect = useCallback((value) => {
    setInputValue(value);
    setSuggestions([]);
    setIsOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < suggestions.length) {
          handleSelect(suggestions[activeIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setActiveIndex(-1);
        break;
      default:
        break;
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getHighlightedText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : part,
    );
  };

  return (
    <div ref={wrapperRef} style={{ position: "relative", width: "300px" }}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for a fruit..."
        style={{
          width: "100%",
          padding: "10px 12px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          outline: "none",
        }}
        onFocus={() => inputValue.trim() && setIsOpen(suggestions.length > 0)}
      />
      {loading && (
        <div style={{ padding: "8px", color: "#888" }}>Loading...</div>
      )}
      {isOpen && suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 0,
            right: 0,
            maxHeight: "200px",
            overflowY: "auto",
            margin: 0,
            padding: 0,
            listStyle: "none",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "white",
            zIndex: 10,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          {suggestions.map((item, index) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              onMouseEnter={() => setActiveIndex(index)}
              style={{
                padding: "10px 12px",
                cursor: "pointer",
                backgroundColor:
                  index === activeIndex ? "#f0f0f0" : "transparent",
              }}
            >
              {getHighlightedText(item, inputValue)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
