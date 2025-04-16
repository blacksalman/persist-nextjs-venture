"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initial state with default values (safe for SSR)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('jobseeker');
  const [user, setUser] = useState(null);

  // Sync with localStorage on client-side mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLoginState = localStorage.getItem('isLoggedIn');
      const savedUserType = localStorage.getItem('userType');
      const savedUser = localStorage.getItem('user');

      setIsLoggedIn(savedLoginState === 'true');
      setUserType(savedUserType || 'jobseeker');
      setUser(savedUser ? JSON.parse(savedUser) : null);
    }
  }, []); // Empty dependency array ensures it runs only once on mount

  // Sync state changes back to localStorage on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', isLoggedIn);
      localStorage.setItem('userType', userType);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    }
  }, [isLoggedIn, userType, user]);

  const login = (userData, type = 'jobseeker') => {
    setIsLoggedIn(true);
    setUserType(type);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType('jobseeker');
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userType');
      localStorage.removeItem('user');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;

// // context/AuthContext.jsx
// 'use client';

// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userType, setUserType] = useState('jobseeker');
//   const [user, setUser] = useState(null);

//   const login = (userData, type = 'jobseeker') => {
//     setIsLoggedIn(true);
//     setUserType(type);
//     setUser(userData);
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUserType('jobseeker');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, userType, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export default AuthContext;