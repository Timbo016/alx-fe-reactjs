import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // Form is valid - submit data
      console.log('Form submitted:', formData);
      alert('Registration successful!');
      // Reset form
      setFormData({ username: '', email: '', password: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>User Registration (Controlled Components)</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {errors.username && <span style={{ color: 'red', fontSize: '14px' }}>{errors.username}</span>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {errors.email && <span style={{ color: 'red', fontSize: '14px' }}>{errors.email}</span>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {errors.password && <span style={{ color: 'red', fontSize: '14px' }}>{errors.password}</span>}
      </div>

      <button 
        type="submit"
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;