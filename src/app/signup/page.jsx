// app/signup/page.jsx
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

const SignupContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: searchParams.get('email') || '',
    phone: '',
  });
  const [otp, setOtp] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  useEffect(() => {
    if (formData.email) {
      handleSendOtp();
    }
  }, [formData.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    setIsSendingOtp(true);
    setError('');
    try {
      // await axios.post('http://localhost:5000/api/auth/send-otp', {
      await axios.post('/api/send-otp', {
        email: formData.email,
      });
      setIsSendingOtp(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsVerifyingOtp(true);
    setError('');
    try {
      // await axios.post('http://localhost:5000/api/auth/signup-verify-otp', {
      await axios.post('/api/signup-verify-otp', {
        email: formData.email,
        otp,
      });
      setIsEmailVerified(true);
      setIsVerifyingOtp(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to verify OTP');
      setIsVerifyingOtp(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!isEmailVerified) {
      setError('Please verify your email before signing up.');
      return;
    }

    try {
      // await axios.post('http://localhost:5000/api/auth/signup', {
      await axios.post('/api/signup', {
        name,
        email,
        phone,
        linkedinUrl: searchParams.get('linkedinUrl'),
      });
      setSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to sign up');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      {/* <Navbar isScrolled={false} /> */}
      <div className="max-w-[560px] mx-auto mt-20 mb-20 px-10 py-10 bg-[rgba(22,22,30,0.7)] rounded-[20px] text-center backdrop-blur-md border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <h2 className="text-[2.5rem] font-light mb-5">Complete Your Signup</h2>
        <p className="text-[1.1rem] text-[rgba(255,255,255,0.7)] mb-7">
          Please provide your details to proceed.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col text-left">
            <label
              htmlFor="name"
              className="text-[1rem] text-[rgba(255,255,255,0.9)] mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="p-[12px_20px] border border-[rgba(255,255,255,0.2)] rounded-lg bg-[rgba(255,255,255,0.05)] text-white text-[1rem] outline-none transition-all duration-300 focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.1)]"
            />
          </div>
          <div className="flex flex-col text-left">
            <label
              htmlFor="email"
              className="text-[1rem] text-[rgba(255,255,255,0.9)] mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isEmailVerified}
              className="p-[12px_20px] border border-[rgba(255,255,255,0.2)] rounded-lg bg-[rgba(255,255,255,0.05)] text-white text-[1rem] outline-none transition-all duration-300 focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.1)] disabled:opacity-50"
            />
            {!isEmailVerified && formData.email && (
              <div className="flex gap-[10px] mt-[10px]">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={isVerifyingOtp}
                  className="flex-1 p-[12px_20px] border border-[rgba(255,255,255,0.2)] rounded-lg bg-[rgba(255,255,255,0.05)] text-white text-[1rem] outline-none transition-all duration-300 focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.1)] disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={isVerifyingOtp || !otp}
                  className="p-[10px_20px] bg-[#8a5cff] rounded-lg border-none text-white text-[0.9rem] cursor-pointer hover:bg-[#9b6dff] transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  {isVerifyingOtp ? 'Verifying...' : 'Verify OTP'}
                </button>
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isSendingOtp}
                  className="p-[10px_20px] bg-transparent border border-[#8a5cff] rounded-lg text-white text-[0.9rem] cursor-pointer hover:bg-[#8a5cff] transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  {isSendingOtp ? 'Resending...' : 'Resend OTP'}
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col text-left">
            <label
              htmlFor="phone"
              className="text-[1rem] text-[rgba(255,255,255,0.9)] mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="p-[12px_20px] border border-[rgba(255,255,255,0.2)] rounded-lg bg-[rgba(255,255,255,0.05)] text-white text-[1rem] outline-none transition-all duration-300 focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.1)]"
            />
          </div>
          {error && (
            <p className="text-[#ff4d4d] text-[0.9rem] mt-[10px]">{error}</p>
          )}
          <button
            type="submit"
            disabled={!isEmailVerified}
            className="p-[12px_30px] bg-gradient-to-r from-[#8a5cff] to-[#5c3bff] rounded-lg border-none text-white text-[1rem] font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b6dff] hover:to-[#6d4cff] hover:-translate-y-[2px] disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            Sign Up
          </button>
        </form>
        {success && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(22,22,30,0.9)] px-10 py-5 rounded-[10px] border border-[rgba(255,255,255,0.2)] shadow-[0_4px_16px_rgba(0,0,0,0.3)] text-white text-[1.2rem] z-[1000]">
            <p>Signup Successful!</p>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

const SignupPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
};

export default SignupPage;