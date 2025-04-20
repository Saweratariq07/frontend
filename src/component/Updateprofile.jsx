import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false); // State for old password visibility
  const [showNewPassword, setShowNewPassword] = useState(false); // State for new password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    if (formData.newPassword !== formData.confirmPassword) {
      setError('New passwords do not match!');
      return;
    }
    if (formData.oldPassword === '' || formData.newPassword === '') {
      setError('Please fill all password fields!');
      return;
    }

    localStorage.setItem('profileData', JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    }));

    console.log('Profile Updated:', formData);
    setError('Profile updated successfully!');

    setFormData({
      ...formData,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });

    setTimeout(() => {
      setError('');
      navigate('/checkout');
    }, 3000);
  };

  // Toggle password visibility functions
  const toggleOldPasswordVisibility = () => setShowOldPassword(prev => !prev);
  const toggleNewPasswordVisibility = () => setShowNewPassword(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

  return (
    <div>
      <section className="header">
        <div className="w-full bg-gray-900 text-white text-center py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-semibold text-4xl md:text-6xl">Update Profile</h1>
            <div className="mt-5 flex justify-center items-center space-x-2 text-sm text-gray-300">
              <Link
                to="/home"
                className="text-xl md:text-2xl text-yellow-400 hover:text-yellow-500 transition capitalize"
              >
                Home
              </Link>
              <span className="text-xl md:text-2xl text-gray-200">/ Update Profile</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 min-h-screen">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">UPDATE PROFILE</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div className="relative">
              <label htmlFor="oldPassword" className="block text-gray-700 font-medium mb-2">Enter Your Old Password:</label>
              <input
                type={showOldPassword ? 'text' : 'password'}
                id="oldPassword"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-8"
                onClick={toggleOldPasswordVisibility}
              >
                {showOldPassword ? (
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="relative">
              <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">Enter Your New Password:</label>
              <input
                type={showNewPassword ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-8"
                onClick={toggleNewPasswordVisibility}
              >
                {showNewPassword ? (
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Your New Password:</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-8"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                  </svg>
                )}
              </button>
            </div>
            {error && (
              <p className={`text-center ${error.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-amber-400 mt-4 text-white py-2 rounded-md hover:bg-amber-500 transition-colors"
            >
              Update Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;