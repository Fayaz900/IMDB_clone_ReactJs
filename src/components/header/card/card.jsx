import React,{useState, useEffect} from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import './card.css'
import {Link} from 'react-router-dom';

function Card({movie}) {
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 1500)
    }, [])
  return (
    <div>
        {
            isLoading
            ?
            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor='#444'>
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            :
            <Link to={`movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards">
                    <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path:""}`} alt="" className="cards__img" />
                    <div className="cards__overlay">
                       <div className="card__title">{movie?movie.original_title:""}</div> 
                       <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">
                            {movie?movie.vote_average:""} <i className='fas fa-star'></i>
                            <div className="card__description">{movie?movie.overview.slice(0,118)+"...":""}</div> 
                        </span>
                        </div> 
                    </div>
                    
                </div>
            </Link>
        }
    </div>
  )
}

export default Card