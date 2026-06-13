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
    <div className='w-full h-screen bg-cover bg-center px-40 py-6' style={{backgroundImage:`url(${background})`}}>
       <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/40"></div>
       <img className='relative z-10 h-12 w-35' src={logo} alt="" />
       <div className='w-full h-full flex items-start justify-center mt-6'>
       <div className=' w-[35%] h-[80%] bg-black/70 flex flex-col items-start justify-start rounded-lg px-10 py-15 gap-12'>
       <h1 className='relative z-10  text-white text-4xl'>{signState}</h1>
       <form className='w-full h-[80%] flex items-start justify-start flex-col gap-4'>
        {signState === "Sign Up"? <input value={name} onChange={(e)=>{setName(e.target.value)}} className='relative z-10 w-full  text-white bg-gray-700 px-4 py-3 rounded-md'  type="text" placeholder='Enter your Name' />:<></> }
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='relative z-10 w-full  text-white bg-gray-700 px-4 py-3 rounded-md' type="email" placeholder='Enter your Email' />
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='relative z-10 w-full  text-white bg-gray-700 px-4 py-3 rounded-md' type="password" placeholder='Enter your Password' />
        <button onClick={user_auth} type='submit'  className='relative z-10 w-full text-white bg-red-600 px-4 py-3 rounded-md'>{signState}</button>
        <div className=' w-full relative z-10 flex justify-between px-2'>
        <div className='flex gap-1'>
        <input type="checkbox" />
        <h1 className='text-gray-400'>Remember me</h1>
        </div>
        <div className='text-gray-400'>
            Need Help?
        </div>
       </div>
       </form>
       <div className='relative z-10'>
        {signState === "Sign In"? <div className='flex gap-4'>
            <h1 className='text-gray-400'>New to Netflix?</h1>
            <button className='text-white' onClick={()=>{setSignState("Sign Up")}}>Sign Up now</button>
        </div>:
        <div className='flex gap-4'>
            <h1 className='text-gray-400'>Already have account?</h1>
            <button className='text-white' onClick={()=>{setSignState("Sign In")}}>Sign In Now</button>
        </div>
        }
        
       </div>
       </div>
       </div>
    </div>
  )
}

export default Login
