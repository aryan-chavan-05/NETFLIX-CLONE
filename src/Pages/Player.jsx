import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import back_arrow from '../assets/back_arrow_icon.png'

const Player = () => {

    const {id} = useParams()

    const [apiData, setApiData] = useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    })

    const Navigate = useNavigate()

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTQ0YjdlNTIyZmRjZDFkYjRiM2VlNzVlODVkYmExYyIsIm5iZiI6MTc4MTI1MTAyNi43NDMsInN1YiI6IjZhMmJiYmQyNTJhNmRjZmYzZmMyM2Q3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oKv6NkE-XojKmT03k4otzzJPQUY_Vq6xmQ4sMqKGADE'
  }
};

   const handleClick = () => {
    Navigate("/")
   }

 useEffect(() => {
   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
 },[])
 

  return (
    <div className='relative h-screen w-full py-5'>
      <button onClick={()=>{
        handleClick()
      }}><img className='absolute h-15 w-15 cursor-pointer' src={back_arrow} alt="" /></button>
      <iframe className='h-[90%] w-[100%] px-20 flex items-center justify-center' src={`https://www.youtube.com/embed/${apiData.key}`} title='traler' frameBorder="0" allowFullScreen></iframe>
      <div className='text-white flex items-start justify-evenly'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
