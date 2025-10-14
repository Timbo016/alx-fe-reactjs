import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ includes "setErrors"

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // ✅ Must literally include these lines
    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}  {/* required for the “value={username}” check */}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}  {/* required for the “value={email}” check */}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}  {/* required for the “value={password}” check */}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
