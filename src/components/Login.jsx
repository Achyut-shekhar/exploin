// components/Login.js
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("currentUser", username);
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login to MemeVerse</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-900 border border-gray-600 text-white"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-teal-600 hover:bg-teal-700 py-3 rounded text-white font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
