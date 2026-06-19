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
      <div className='relative'>
      <Navbar/>
      <img className='w-full object-cover' src={hero_banner} alt="" />
      <div className='absolute inset-0 bg-black/30'></div>
      <img className='absolute h-[150px] max-[1000px]:h-[150px] w-[400px] max-[1000px]:w-[300px] bottom-[50%] left-[2%] max-[750px]:h-[100px] max-[750px]:w-[200px] max-[1000px]:top-[20%]  max-[750px]:top-[15%] max-[450px]:h-[75px] max-[450px]:w-[150px]' src={hero_title} alt="" />
      <p className='absolute bottom-[40%] left-[2%] max-w-[600px]  text-white text-lg max-[1100px]:hidden'>Discovering his ties to a secret ancient order, a young man living in modern <br/> Istanbul embarks on a quest to save the city from an immortal enemy </p>
      <div className='absolute bottom-[33%] left-[2%] flex items-center gap-6 max-[1000px]:top-[30%] max-[750px]:top-[20%] max-[450px]:top-[10%] max-[450px]:gap-2 '>
      <a href="https://www.youtube.com/watch?v=80dqOwAOhbo"><button className=' flex items-center justify-center bg-white px-4 py-2 rounded-lg gap-2 hover:bg-gray-200 transition duration-300 cursor-pointer max-[750px]:px-2 max-[750px]:py-1 max-[450px]:px-1   max-[450px]:py-1'><img className='h-5 w-5 max-[750px]:h-3 max-[750px]:w-3 ' src={play} alt="" />Play</button></a>
      <button className=' flex items-center justify-center bg-gray-400 px-4 py-2 rounded-lg gap-2 hover:bg-gray-500 transition duration-300 cursor-pointer max-[750px]:px-2 max-[750px]:py-1  max-[450px]:px-1   max-[450px]:py-1'><img className='h-7 w-7 max-[750px]:h-4 max-[750px]:w-4 ' src={info} alt="" />More info</button>
      </div>
      <div className='absolute bottom-0 max-[1450px]:relative '>
       <h1 className='text-white text-2xl px-6 font-bold'>Popular on Netflix</h1>
       <MovieRow/>
       </div>
      </div>
      <div className='py-6'>
       <h1 className='text-white text-2xl px-6 font-bold'>Blockbuster Movies</h1>
       <MovieRow category={"popular"}/>
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