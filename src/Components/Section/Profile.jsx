import React, { useState, useEffect } from "react";

const Profile = () => {
  // State for form fields
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      const data = JSON.parse(savedData);
      setFullName(data.fullName || "Alex Morgan");
      setUsername(data.username || "alexmorgan");
      setEmail(data.email || "alex.morgan@email.com");
      setBio(data.bio || "Product designer with 8+ years of experience crafting intuitive digital experiences. Currently focused on design systems and accessibility.");
      setProfilePhoto(data.profilePhoto || null);
    } else {
      // Set default values if no data in localStorage
      setFullName("Alex Morgan");
      setUsername("alexmorgan");
      setEmail("alex.morgan@email.com");
      setBio("Product designer with 8+ years of experience crafting intuitive digital experiences. Currently focused on design systems and accessibility.");
    }
  }, []);

  // Save data to localStorage whenever it changes
  const saveToLocalStorage = (data) => {
    localStorage.setItem("profileData", JSON.stringify(data));
  };

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        // Save immediately to localStorage
        const currentData = {
          fullName,
          username,
          email,
          bio,
          profilePhoto: reader.result,
        };
        saveToLocalStorage(currentData);
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Simulate save with skeleton loading effect
  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      // Save all data to localStorage
      const data = {
        fullName,
        username,
        email,
        bio,
        profilePhoto,
      };
      saveToLocalStorage(data);
      
      setLoading(false);
      setEditMode(false);
      alert("Profile updated successfully!");
    }, 2000);
  };

  // Handle cancel
  const handleCancel = () => {
    // Reset to saved data from localStorage
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      const data = JSON.parse(savedData);
      setFullName(data.fullName || "Alex Morgan");
      setUsername(data.username || "alexmorgan");
      setEmail(data.email || "alex.morgan@email.com");
      setBio(data.bio || "Product designer with 8+ years of experience crafting intuitive digital experiences. Currently focused on design systems and accessibility.");
      setProfilePhoto(data.profilePhoto || null);
    } else {
      setFullName("Alex Morgan");
      setUsername("alexmorgan");
      setEmail("alex.morgan@email.com");
      setBio("Product designer with 8+ years of experience crafting intuitive digital experiences. Currently focused on design systems and accessibility.");
      setProfilePhoto(null);
    }
    setEditMode(false);
  };

  // Skeleton Loading UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 animate-pulse">
          <div className="h-8 w-32 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-64 bg-gray-200 rounded mb-8"></div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 w-48 bg-gray-200 rounded"></div>
              <div className="h-3 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
              <div className="h-10 w-full bg-gray-200 rounded"></div>
            </div>
            <div>
              <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
              <div className="h-10 w-full bg-gray-200 rounded"></div>
            </div>
            <div>
              <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
              <div className="h-10 w-full bg-gray-200 rounded"></div>
            </div>
            <div>
              <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
              <div className="h-24 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-48 bg-gray-200 rounded mt-1"></div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-8">
            <div className="h-10 w-24 bg-gray-200 rounded"></div>
            <div className="h-10 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-25">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600 text-sm">
              {editMode ? 'Edit your personal information' : 'View your personal information'}
            </p>
          </div>
          {!editMode && (
            <button
              onClick={toggleEditMode}
              className="px-6 py-2 bg-black cursor-pointer text-white rounded-lg hover:bg-gray-800 transition font-medium text-sm"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Photo */}
        <div className="mt-8 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Profile Photo</h3>
          <div className="flex items-center gap-6">
            <div 
              className={`relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                editMode ? 'cursor-pointer group hover:border-blue-500' : 'cursor-default'
              } ${editMode ? 'border-gray-300' : 'border-gray-200'}`}
            >
              {profilePhoto ? (
                <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              )}
              {editMode && (
                <>
                  <div className="absolute inset-0 bg-black cursor-pointer bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handlePhotoUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-600">
                {editMode ? 'Click the avatar to upload a new photo' : 'Profile photo'}
              </p>
              <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF. Max 2MB.</p>
            </div>
          </div>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          {editMode ? (
            <input
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                // Auto-save on change
                const data = {
                  fullName: e.target.value,
                  username,
                  email,
                  bio,
                  profilePhoto,
                };
                saveToLocalStorage(data);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
              placeholder="Enter your full name"
            />
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
              {fullName}
            </div>
          )}
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Username
          </label>
          {editMode ? (
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                // Auto-save on change
                const data = {
                  fullName,
                  username: e.target.value,
                  email,
                  bio,
                  profilePhoto,
                };
                saveToLocalStorage(data);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
              placeholder="Enter your username"
            />
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
              {username}
            </div>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          {editMode ? (
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // Auto-save on change
                const data = {
                  fullName,
                  username,
                  email: e.target.value,
                  bio,
                  profilePhoto,
                };
                saveToLocalStorage(data);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
              placeholder="Enter your email"
            />
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
              {email}
            </div>
          )}
        </div>

        {/* Bio */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Bio
          </label>
          {editMode ? (
            <>
              <textarea
                rows={4}
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                  // Auto-save on change
                  const data = {
                    fullName,
                    username,
                    email,
                    bio: e.target.value,
                    profilePhoto,
                  };
                  saveToLocalStorage(data);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none text-gray-900"
                placeholder="Tell us about yourself"
              />
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-500">
                  Brief description for your profile. Max 160 characters.
                </p>
                <p className={`text-xs font-medium ${bio.length > 160 ? 'text-red-500' : 'text-gray-400'}`}>
                  {bio.length}/160
                </p>
              </div>
            </>
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900 min-h-[80px]">
              {bio}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {editMode && (
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition font-medium cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-black cursor-pointer text-white rounded-lg hover:bg-gray-800 transition font-medium"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;