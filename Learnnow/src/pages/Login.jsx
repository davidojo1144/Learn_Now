import React, { useState } from 'react'

const Login = () => {
  const [logs, setLogs] = useState("Sign Up")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")


  const handleSubmit = (event)=> {
    event.preventDefault()
  }
  
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <div>
          <p className='prata-regular text-center md:text-2xl text-xl font-medium'>{logs}</p>
        </div>
        <div className='flex flex-col items-center w-full max-w-xs space-y-4 pt-5'>
          <input 
            className='w-full p-2 border rounded border-gray-400 focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200 '
            type="email" 
            placeholder='Email' 
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            required
          />
          <input 
            className='w-full p-2 border border-gray-400 rounded focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200'
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            required
          />
          {
            (
              logs === "Sign Up" ? 
          <input 
            className='w-full p-2 border border-gray-400 rounded focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200'
            type="text" 
            placeholder='D-O-B' 
            value={dateOfBirth}
            onChange={(event)=>setDateOfBirth(event.target.value)}
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
        <button type='submit' className='mt-6 px-6 py-2 bg-blue-400 text-white rounded hover:bg-blue-500'>
          {logs}
        </button>
      </form>
    </div>
  )
}

export default Login