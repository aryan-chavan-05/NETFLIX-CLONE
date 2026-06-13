import React from 'react'
import insta from '../assets/instagram_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import youtube from '../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className='w-full h-[20rem] flex flex-col px-50 max-[750px]:px-20'>
      <div className='h-full w-full flex items-center gap-4'>
        <a className='h-10 w-10' href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
        <a  className='h-10 w-10' href="https://www.instagram.com/"><img src={insta} alt="" /></a>
        <a className='h-10 w-10' href="https://x.com/?lang=en-in"><img src={twitter} alt="" /></a>
        <a className='h-10 w-10' href="https://www.youtube.com/"><img src={youtube} alt="" /></a>
      </div>
      <div className=' h-full w-full flex gap-10 text-white '>
        <div className='flex items-start justify-evenly flex-col'>
            <h1>Audio Description</h1>
            <h1>Investor Relations</h1>
            <h1>Legal Notices</h1>
        </div>
        <div className='flex items-start justify-evenly flex-col'>
            <h1>Help Centre</h1>
            <h1>Jobs</h1>
            <h1>Cookie Preferences</h1>
        </div>
        <div className='flex items-start justify-evenly flex-col'>
            <h1>Gift Cards</h1>
            <h1>Terms of Use</h1>
            <h1>Corporate Information</h1>
        </div>
        <div className='flex items-start justify-evenly flex-col'>
            <h1>Media Centre</h1>
            <h1>Privacy</h1>
            <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
