// app/login/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import Footer from '../footer/page';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [error, setError] = useState('');
  const [emailNotFound, setEmailNotFound] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    if (email) {
      handleCheckEmail();
    }
  }, [email]);

  const handleCheckEmail = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    setIsCheckingEmail(true);
    setError('');
    setEmailNotFound(false);
    try {
      // const response = await axios.post('http://localhost:5000/api/auth/check-email', { email });
      const response = await axios.post('/api/check-email', { email });
      setIsCheckingEmail(false);
      if (response.data.exists) {
        setIsEmailChecked(true);
        setIsSendingOtp(true);
        // await axios.post('http://localhost:5000/api/auth/send-otp', { email });
        await axios.post('/api/send-otp', { email });
        setIsSendingOtp(false);
      } else {
        setEmailNotFound(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to check email');
      setIsCheckingEmail(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError('Please enter the OTP');
      return;
    }

    setIsVerifyingOtp(true);
    setError('');
    try {
      // const response = await axios.post('http://localhost:5000/api/auth/login-verify-otp', { email, otp });
      const response = await axios.post('/api/login-verify-otp', { email, otp });
      setIsVerifyingOtp(false);
      setIsEmailVerified(true);
      login(response.data.user);
      setSuccess(true);
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to verify OTP');
      setIsVerifyingOtp(false);
    }
  };

  const handleResendOtp = async () => {
    setIsSendingOtp(true);
    setError('');
    try {
      // await axios.post('http://localhost:5000/api/auth/send-otp', { email });
      await axios.post('/api/send-otp', { email });
      setIsSendingOtp(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to resend OTP');
      setIsSendingOtp(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      <div className="max-w-[500px] mx-auto mt-20 mb-20 px-10 py-10 bg-[rgba(22,22,30,0.7)] rounded-[20px] text-center backdrop-blur-md border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <h2 className="text-[2.5rem] font-light mb-5">Login to Your Account</h2>
        <p className="text-[1.1rem] text-[rgba(255,255,255,0.7)] mb-7">
          Enter your email to proceed.
        </p>
        <form
          onSubmit={isEmailChecked ? handleVerifyOtp : (e) => e.preventDefault()}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-[1rem] text-[rgba(255,255,255,0.9)] mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isEmailChecked || isCheckingEmail}
              className="p-[12px_20px] border border-[rgba(255,255,255,0.2)] rounded-lg bg-[rgba(255,255,255,0.05)] text-white text-[1rem] outline-none transition-all duration-300 focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.1)] disabled:opacity-50"
            />
            {isEmailChecked && !isEmailVerified && (
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={isVerifyingOtp}
                  className="p-[12px_20px] border border-[rgba(255,255,255,0.2)] rounded-lg bg-[rgba(255,255,255,0.05)] text-white text-[1rem] outline-none transition-all duration-300 focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.1)] disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={isSendingOtp}
                  className="p-[10px_20px] bg-transparent border border-[#8a5cff] rounded-lg text-white text-[0.9rem] cursor-pointer hover:bg-[#8a5cff] transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  {isSendingOtp ? 'Resending...' : 'Resend OTP'}
                </button>
              </div>
            )}
          </div>
          {error && (
            <p className="text-[#ff4d4d] text-[0.9rem] mt-[10px]">{error}</p>
          )}
          {emailNotFound && (
            <p className="text-[#ff4d4d] text-[0.9rem] mt-[10px]">
              Your email was not found. Please{' '}
              <Link
                href={{ pathname: '/signup', query: { email } }}
                className="text-[#8a5cff] no-underline font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          )}
          {isEmailChecked && (
            <button
              type="submit"
              disabled={isVerifyingOtp || !otp}
              className="p-[12px_30px] bg-gradient-to-r from-[#8a5cff] to-[#5c3bff] rounded-lg border-none text-white text-[1rem] font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#9b6dff] hover:to-[#6d4cff] hover:-translate-y-[2px] disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {isVerifyingOtp ? 'Verifying...' : 'Verify OTP'}
            </button>
          )}
        </form>
        {success && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(22,22,30,0.9)] px-10 py-5 rounded-[10px] border border-[rgba(255,255,255,0.2)] shadow-[0_4px_16px_rgba(0,0,0,0.3)] text-white text-[1.2rem] z-[1000]">
            <p>Login Successful!</p>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LoginPage;