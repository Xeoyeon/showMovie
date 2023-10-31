import React from "react";
import {
    MovieContainer,
    MovieImg,
    MovieInfo,
    MovieTitle,
    MovieVote,
    OverviewContainer,
  } from './Movie.style.jsx';

const base_url = "https://image.tmdb.org/t/p/w1280/";


export default function Movie({title, poster_path, vote_average,overview}){
    //Movie라는 함수형 컴포넌트를 정의하고 외부에서 사용할 수 있도록 내보내고 있습니다. 
    //export default 문을 사용하여 이 컴포넌트를 다른 파일에서 import 할 수 있게 됩니다.

    return(
        <MovieContainer>
            <OverviewContainer>
                {overview}
            </OverviewContainer>
            <MovieImg src={base_url+poster_path} alt={title}/>
            <MovieInfo>
                <MovieTitle>{title}</MovieTitle>
                <MovieVote>{vote_average}</MovieVote>
            </MovieInfo>
        </MovieContainer>

    )
}



