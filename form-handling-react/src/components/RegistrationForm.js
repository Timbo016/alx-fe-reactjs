import React, { useState } from 'react';

function RegistrationForm() {
  // 1. Create state variables for each input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for handling errors
  const [error, setError] = useState('');

  // 2. Handle form submission
  const handleSubmit = (event) => {
    // Prevents the page from reloading
    event.preventDefault(); 
    
    // 3. Basic validation: check for empty fields
    if (!username || !email || !password) {
      setError('All fields are required.');
      return; // Stop the submission
    }

    // If validation passes:
    setError(''); // Clear any previous errors
    console.log('Controlled Form Submitted:', { username, email, password });
    
    // Here you would send data to an API
    alert('Success! (Check the console)');

    // Reset the form
    setUsername('');
    setEmail('');
    setPassword('');
  };

  // 4. Return the JSX form
  return (
    <div className="form-container">
      <h2>Controlled Component Form</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Display error message if it exists */}
        {error && <p className="error">{error}</p>}

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username} // The input's value is "controlled" by the state
            onChange={(e) => setUsername(e.target.value)} // Update state on change
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;