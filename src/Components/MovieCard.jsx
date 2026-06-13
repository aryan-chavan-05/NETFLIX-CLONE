import React from 'react'

const MovieCard = ({image , title}) => {
  return (
    <div className=" min-w-[220px] flex-shrink-0 cursor-pointer">
      <img
        className="
        h-30
        w-60
        "
        src={image}
        alt=""
      />
      <h1 className='text-white'>{title}</h1>
    </div>
  )
}

export default MovieCard
