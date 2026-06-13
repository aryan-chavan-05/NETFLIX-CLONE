import React, { useRef, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieRow = ({category}) => {

    const [apiData, setApiData] = useState([])
    const cardRef = useRef();

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTQ0YjdlNTIyZmRjZDFkYjRiM2VlNzVlODVkYmExYyIsIm5iZiI6MTc4MTI1MTAyNi43NDMsInN1YiI6IjZhMmJiYmQyNTJhNmRjZmYzZmMyM2Q3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oKv6NkE-XojKmT03k4otzzJPQUY_Vq6xmQ4sMqKGADE'
  }
};

const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardRef.current.addEventListener('wheel', handleWheel)
}, [])

  return (
     <div className="px-6 py-4">

      <div className="flex gap-4 overflow-x-scroll no-scrollbar" ref={cardRef}>

        {apiData.map((card, index) => {
           return <Link to={`/Player/${card.id}`} key={index} >
          <MovieCard
            title={card.original_title}
            image={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
          />
          </Link>
          })}

      </div>

    </div>
  )
}

export default MovieRow
