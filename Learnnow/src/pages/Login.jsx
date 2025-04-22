import React, { useState } from 'react'

const Login = () => {
  const [logs, setLogs] = useState("Sign Up")
  
  return (
    <div className='container'>
      <div className='flex flex-col items-center'>
        <div>
          <p className='prata-regular text-center md:text-2xl text-xl font-medium'>{logs}</p>
        </div>
        <div className='flex flex-col items-center w-full max-w-xs space-y-4 pt-5'>
          <input 
            className='w-full p-2 border rounded border-gray-400 focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200 '
            type="email" 
            placeholder='Email' 
            required
          />
          <input 
            className='w-full p-2 border border-gray-400 rounded focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200'
            type="password" 
            placeholder='Password' 
            required
          />
          {
            (
              logs === "Sign Up" ? 
          <input 
            className='w-full p-2 border border-gray-400 rounded focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200'
            type="text" 
            placeholder='D-O-B' 
            required
          />
          : ""
            )
        }
        </div>
        <div className='flex justify-between w-full max-w-xs mt-4'>
          <p className='text-sm cursor-pointer'>{logs === "Login" ? "Forgot password" : "Already have an account?"}</p>
          <p onClick={()=> setLogs(logs === "Sign Up" ? "Login" : "Sign Up")} className='text-sm cursor-pointer'>{logs === "Sign Up" ? "Login" : "Sign Up"}</p>
        </div>
        <button className='mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          {logs}
        </button>
      </div>
    </div>
  )
}

export default Login