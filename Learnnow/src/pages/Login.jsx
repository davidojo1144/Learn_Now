import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formMode, setFormMode] = useState("Sign Up");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLoggedIn(true);
      setFormMode("Logout");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      setLoading(true);

      if (formMode === "Sign Up") {
        const response = await axios.post(
          'https://learning-management-systems-10.onrender.com/api/register/',
          { full_name, email, password, username }
        );
        
        toast.success("Registration successful");
        setFullName("");
        setEmail("");
        setPassword("");
        setUsername("");
        setFormMode("Login");
      } else if (formMode === "Login") {
        const response = await axios.post(
          'https://learning-management-systems-10.onrender.com/api/login/',
          { email, password }
        );
        
        toast.success("Login successful");
        localStorage.setItem("userToken", response.data?.access);
        setIsLoggedIn(true);
        setFormMode("Logout");
        
        setTimeout(() => {
          navigate('/');
        }, 5000);
      }
    } catch (err) {
      toast.error(`${formMode} failed: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    setFormMode("Login");
    toast.success("Logged out successfully");
    navigate('/login');
  };

  const toggleFormMode = () => {
    if (!isLoggedIn) {
      setFormMode(prev => prev === "Sign Up" ? "Login" : "Sign Up");
    }
    setError(null);
  };
  
  if (loading) return <div className="flex items-center justify-center py-8"><LoadingSpinner/></div>;

  return (
    <div className='container'>
      {isLoggedIn ? (
        <div className='flex flex-col items-center'>
          <p className='prata-regular text-center md:text-2xl text-xl font-medium mb-6'>
            You are logged in!
          </p>
          <button 
            onClick={handleLogout}
            className='mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <div>
            <p className='prata-regular text-center md:text-2xl text-xl font-medium'>
              {formMode}
            </p>
          </div>

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
      )}
    </div>
  );
};

export default Login;