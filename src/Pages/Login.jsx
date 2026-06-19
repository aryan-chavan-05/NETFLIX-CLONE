import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import background from '../assets/background_banner.jpg'
import { login, signup } from '../firebase'
import loding_spinner from '../assets/netflix_spinner.gif'

const Login = () => {

    const [signState, setSignState] = useState("Sign In")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const user_auth = async (e) => {
        e.preventDefault()
        setLoading(true)
        if(signState === "Sign In"){
            await login(email , password)
        }else{
            await signup(name , email , password)
        }
        setLoading(false)
    }

  return (
    loading?<div className='w-full h-full flex items-center justify-center'><img className='h-40 w-50' src={loding_spinner} alt="" /></div>:
    <div className='w-full min-h-screen bg-cover bg-center px-4 sm:px-8 md:px-16 lg:px-40 py-4 sm:py-6' style={{backgroundImage:`url(${background})`}}>
       <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/40"></div>
       <img className='relative z-10 h-10 sm:h-12 w-auto' src={logo} alt="" />
       <div className='w-full min-h-screen flex items-center justify-center py-6 sm:py-8'>
       <div className='w-[90%] sm:w-[80%] md:w-[65%] lg:w-[35%] bg-black/70 flex flex-col items-start justify-start rounded-lg px-6 sm:px-8 md:px-10 py-8 sm:py-12 md:py-15 gap-8 sm:gap-10 md:gap-12'>
       <h1 className='relative z-10 text-white text-2xl sm:text-3xl md:text-4xl font-bold'>{signState}</h1>
       <form className='w-full flex items-start justify-start flex-col gap-3 sm:gap-4'>
        {signState === "Sign Up"? <input value={name} onChange={(e)=>{setName(e.target.value)}} className='relative z-10 w-full text-sm sm:text-base text-white bg-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600'  type="text" placeholder='Enter your Name' />:<></> }
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='relative z-10 w-full text-sm sm:text-base text-white bg-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' type="email" placeholder='Enter your Email' />
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='relative z-10 w-full text-sm sm:text-base text-white bg-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' type="password" placeholder='Enter your Password' />
        <button onClick={user_auth} type='submit' className='relative z-10 w-full text-sm sm:text-base text-white bg-red-600 px-3 sm:px-4 py-2 sm:py-3 rounded-md font-semibold hover:bg-red-700 transition mt-2'>{signState}</button>
        <div className='w-full relative z-10 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 px-2 text-xs sm:text-sm mt-2'>
        <div className='flex gap-1 items-center'>
        <input type="checkbox" className='cursor-pointer' />
        <h1 className='text-gray-400'>Remember me</h1>
        </div>
        <div className='text-gray-400 cursor-pointer hover:text-gray-300'>
            Need Help?
        </div>
       </div>
       </form>
       <div className='relative z-10 w-full'>
        {signState === "Sign In"? <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base'>
            <h1 className='text-gray-400'>New to Netflix?</h1>
            <button className='text-white font-semibold hover:underline' onClick={()=>{setSignState("Sign Up")}}>Sign Up now</button>
        </div>:
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base'>
            <h1 className='text-gray-400'>Already have account?</h1>
            <button className='text-white font-semibold hover:underline' onClick={()=>{setSignState("Sign In")}}>Sign In Now</button>
        </div>
        }
        
       </div>
       </div>
       </div>
    </div>
  )
}

export default Login
