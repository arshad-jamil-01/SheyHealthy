import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import {toast}  from 'react-hot-toast'

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const userRegister = async (e)=>{
        e.preventDefault();
    try{
        const response = await axios.post("/api/user/register", {name, email,password})
        const data = response.data
        console.log(data)
        toast.success(data.message); // Success toast
        toast("Redirect to login page");
        navigate("/login")
        //after submit form 
        setName("");
        setEmail("");
        setPassword("");
        }catch(err){
      toast.error(err.response?.data?.message || "Something went wrong");    
    }
    };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md relative">

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 bg-amber-700 text-white px-4 py-1 rounded-bl-2xl w-fit absolute -top-4 left-6 shadow-md">
        Nice to meet you 👋
        </h2>

        {/* Form */}
        <form onSubmit={userRegister} className="mt-8 space-y-4" >

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              value={name} 
              onChange={e => setName(e.target.value)} 
              type="text"
              placeholder="Enter your name"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              type="email"
              placeholder="Enter your email"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              type="password"
              placeholder="Enter your password"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Button */}
          <button type='submit' className="w-full mt-4 bg-gradient-to-r from-amber-600 to-amber-800 !text-white  !text-bold !text-xl py-2 rounded-lg hover:from-amber-700 hover:to-amber-900 transition shadow-md cursor-pointer">
            Register
          </button>

        </form>

        {/* Login Link */}
        <p className="text-sm text-center !mt-1  ">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-700 font-semibold hover:underline">
            Go to Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register
