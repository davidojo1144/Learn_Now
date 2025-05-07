import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formMode, setFormMode] = useState("Sign Up");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      setLoading(true);

      if (formMode === "Sign Up") {
        // Registration API call
        const response = await axios.post(
          'https://learning-management-systems-10.onrender.com/api/register/',
          { full_name, email, password, username }
        );
        
        console.log('Registration successful:', response.data);
        setSuccess(true);
        // Reset form after successful registration
        setFullName("");
        setEmail("");
        setPassword("");
        setUsername("");
        // Switch to login form after successful registration
        setFormMode("Login");
      } else {
        // Login API call
        const response = await axios.post(
          'https://learning-management-systems-10.onrender.com/api/login/',
          { email, password }
        );
        
        console.log('Login successful:', response.data);
        
        // Store token in localStorage
        localStorage.setItem('authToken', response.data.token);
        
        // Store user data in localStorage if available
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        
        // Redirect to home page immediately after successful login
        navigate('/');
      }
    } catch (err) {
      console.error(`${formMode} failed:`, err);
      setError(
        err.response?.data?.message || 
        err.response?.data?.error || 
        `${formMode} failed. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleFormMode = () => {
    setFormMode(prev => prev === "Sign Up" ? "Login" : "Sign Up");
    setError(null);
    setSuccess(false);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <div>
          <p className='prata-regular text-center md:text-2xl text-xl font-medium'>
            {formMode}
          </p>
        </div>
        
        {/* Status messages */}
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded w-full max-w-xs text-center">
            {error}
          </div>
        )}
        {success && formMode === "Sign Up" && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded w-full max-w-xs text-center">
            Registration successful! You can now login.
          </div>
        )}

        <div className='flex flex-col items-center w-full max-w-xs space-y-4 pt-5'>
          {formMode === "Sign Up" && (
            <>
              <input
                className='w-full p-2 border rounded border-gray-400 focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200'
                type="text" 
                placeholder='Full name' 
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <input 
                className='w-full p-2 border border-gray-400 rounded focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200'
                type="text" 
                placeholder='Username' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </>
          )}
          
          <input 
            className='w-full p-2 border rounded border-gray-400 focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200'
            type="email" 
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input 
            className='w-full p-2 border border-gray-400 rounded focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200'
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className='flex justify-between w-full max-w-xs mt-4'>
          <p className='text-sm cursor-pointer'>
            {formMode === "Login" ? "Forgot password" : "Already have an account?"}
          </p>
          <p 
            onClick={toggleFormMode}
            className='text-sm cursor-pointer'
          >
            {formMode === "Sign Up" ? "Login" : "Sign Up"}
          </p>
        </div>
        
        <button 
          type='submit' 
          className='mt-6 px-6 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 disabled:bg-blue-300'
          disabled={loading}
        >
          {loading ? "Processing..." : formMode}
        </button>
      </form>
    </div>
  );
};

export default Login;