import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

function Banner({fetchUrl}) {

  const [movie,setMovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async ()=>{
      const {data} =  await instance.get(fetchUrl)
      console.log(data.results[Math.floor(Math.random()*data.results.length)]);
      setMovies(data.results[Math.floor(Math.random()*data.results.length)])
    }

    console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
      <div className="content">
        <h1 className='mb-3'>{movie?.name}</h1>
        <button type="button" class="btn btn-danger">Play <i class="fa-solid fa-caret-right"></i></button>
        <button type="button" class="btn border-white ms-4 more"><span className='text-light'>More info</span> <i class="fa-solid fa-caret-down text-light"></i></button>

        <h2>{movie?.overview.slice(0,200)}....</h2>
      </div>
    </div>
  )
}

export default Banner