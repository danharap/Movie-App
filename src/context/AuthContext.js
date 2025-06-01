import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const login = () => {
    const userData = {
      name: formData.name || 'John Doe',
      email: formData.email || 'john@example.com'
    };
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, formData, setFormData }}>
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
