import logo from '../assets/logo.png'
import search from '../assets/search_icon.svg'
import bell from '../assets/bell_icon.svg'
import profile from '../assets/profile_img.png'
import caret from '../assets/caret_icon.svg'
import { useState } from 'react'
import { logout } from '../firebase'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div  className='navbar fixed top-0 left-0 w-full h-20 flex items-center justify-between px-12 max-[550px]:px-6 z-50 max-[450px]:h-15'>
      <div className=' flex items-center justify-center gap-10'>
        <img className='w-25 h-7 max-[600px]:w-17 max-[600px]:h-6' src={logo} alt="" />
        <ul className='hidden  lg:flex items-center justify-center gap-6 text-white'>
          <li className='cursor-pointer hover:text-gray-300 transition'><a href="">Home</a></li>
          <li className='cursor-pointer hover:text-gray-300 transition'><a href="">TV Shows</a></li>
          <li className='cursor-pointer hover:text-gray-300 transition'><a href="">Movies</a></li>
          <li className='cursor-pointer hover:text-gray-300 transition'><a href="">New & Popular</a></li>
          <li className='cursor-pointer hover:text-gray-300 transition'><a href="">My List</a></li>
          <li className='cursor-pointer hover:text-gray-300 transition'><a href="">Browse by Languages</a></li>
        </ul>
      </div>
      <div className=' flex items-center justify-center gap-6 text-white max-[600px]:gap-3'>
        <img className='h-5 w-5 max-[600px]:h-4   max-[600px]:w-4' src={search} alt="" />
        <p className='hidden md:block'>Children</p>
        <img className='h-6 w-6 max-[600px]:h-4   max-[600px]:w-4' src={bell} alt="" />
         <div className='relative'>
          <div className='flex items-center gap-3 cursor-pointer max-[600px]:gap-2' onClick={() => setShowMenu(!showMenu)}>
            <img className='rounded-lg max-[600px]:h-5  max-[600px]:w-5 max-[600px]:rounded-sm' src={profile} alt="" />
            <img className={`${showMenu ? "rotate-180" : ""} transition max-[600px]:h-4   max-[600px]:w-4`} src={caret} alt="" />
          </div>
          {showMenu && (
            <div className='absolute right-0 top-12 bg-black text-white w-32 py-3 rounded-md shadow-lg'>

              <button onClick={()=>{logout()}} className='w-full hover:bg-gray-800 py-2'>
                Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Navbar
