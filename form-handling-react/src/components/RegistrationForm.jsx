import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}       
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}          
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}       
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
