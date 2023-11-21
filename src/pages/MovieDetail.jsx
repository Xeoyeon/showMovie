import React from 'react'
import { MovieDetailContainer,MovieTitleContainer } from '../Components/Movie.style'
import { useParams,useLocation } from 'react-router-dom'
export const base_url = "https://image.tmdb.org/t/p/w1280/";
export default function MovieDetail() {
    const {title}=useParams();
    const {state}=useLocation();
    

  return (
    <MovieDetailContainer>
        <div style={{display:'flex'}}>
            <img 
                style={{width:"300px", height:"450px"}}
                src={base_url+state.poster_path} alt="영화 포스터"
            /> 
            {/* props가 state로 바뀜.. */}
            <MovieTitleContainer>
                <div style={{fontSize:"32px"}}>{title}</div>
            </MovieTitleContainer>
        </div>
    </MovieDetailContainer>
  )
}
