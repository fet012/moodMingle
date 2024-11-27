import React, { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "") {
      setError("Please enter a name");
    } else if (username.length < 5) {
      setError(" Name should not be less than 5 words");
    } else {
      login(username);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6 ml-10">Welcome to MoodMingle</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="p-3 rounded-md w-80 mb-4 border-2 border-white text-black"
      />
      {error && <p className="text-red-600 mb-3">{error}</p> }
      <button
        onClick={handleLogin}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
