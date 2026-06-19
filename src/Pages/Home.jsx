import React from 'react'
import Navbar from '../Components/Navbar'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play from '../assets/play_icon.png'
import info from '../assets/info_icon.png'
import MovieRow from '../Components/MovieRow'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='h-full w-full'>
      <div className='relative h-[60vh] md:h-[75vh] w-full overflow-hidden'>
        <Navbar />
        <img className='w-full h-full object-cover' src={hero_banner} alt="" />
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='absolute inset-0 flex flex-col md:justify-end justify-center items-start p-4 md:pl-16 gap-4'>
          <img className='w-56 md:w-96 h-auto' src={hero_title} alt="" />
          <p className='hidden md:block max-w-2xl text-white text-lg'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2'>
            <a href="https://www.youtube.com/watch?v=80dqOwAOhbo"><button className='flex items-center justify-center bg-white text-black px-5 py-2 rounded-md gap-2 hover:bg-gray-200 transition duration-300'><img className='h-5 w-5' src={play} alt="" />Play</button></a>
            <button className='flex items-center justify-center bg-gray-400 text-white px-4 py-2 rounded-md gap-2 hover:bg-gray-500 transition duration-300'><img className='h-6 w-6' src={info} alt="" />More info</button>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 w-full z-40 px-6 md:px-16 pb-6'>
          <h1 className='text-white text-2xl font-bold mb-2'>Popular on Netflix</h1>
          <MovieRow category={"popular"}/>
        </div>
      </div>
      <div className='py-6'>
       <h1 className='text-white text-2xl px-6 font-bold'>Only on Netflix</h1>
       <MovieRow category={"top_rated"}/>
       </div>
       <div className='py-6'>
       <h1 className='text-white text-2xl px-6 font-bold'>Upcomming</h1>
       <MovieRow category={"upcoming"}/>
       </div>
       <div className='py-6'>
       <h1 className='text-white text-2xl px-6 font-bold'>Top Pics for You</h1>
       <MovieRow category={"now_playing"}/>
       </div>
       <Footer/>
    </div>
  )
}

export default Home

