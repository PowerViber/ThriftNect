import React, { useState } from "react";
import { users } from "../data/userData"; 

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [points, setPoints] = useState(0); 
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    if (users.find((user) => user.email === email)) {
      setErrorMessage("Email already exists!");
      return;
    }

    const newUser = { name, email, password, points };
    users.push(newUser);
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    window.location.href = "/";
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        onClick={handleRegister}
        className="w-full p-3 bg-green-main text-white rounded-full"
      >
        Register
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default Register;
