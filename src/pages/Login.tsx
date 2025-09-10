import React, { useState } from "react";
import { users } from "../data/userData"; 

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user)); 
      window.location.href = "/"; 
    } else {
      setErrorMessage("Invalid credentials!");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
        onClick={handleLogin}
        className="w-full p-3 bg-green-main text-white rounded-full"
      >
        Login
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="/register" className="text-green-main hover:text-green-700">
          Register here
        </a>
      </p>
    </div>
  );
};

export default Login;
