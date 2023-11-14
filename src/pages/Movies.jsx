import React from 'react';
import {mvInfo} from '../movieDummy';
import Movie from '../Components/Movie';
import { MoviesContainer } from '../Components/Movie.style';
export default function Movies() {
  return (
    <MoviesContainer>
        {/* {jsx안에서 자바스크립트 문법을 사용할 때에는 중괄호를쓴다} */}
      {
         mvInfo.results.map((item)=>{
           return (
             <Movie 
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
             />//Movie라는 컴포넌트를 랜더링 하겠다는 의미. 따라서 components 파일의 Movie 컴포넌트가 실행됨.
             //Movie 컴포넌트에 값을 전달해줘야 하므로 !
           )
         })
      }
    </MoviesContainer>
  )
}
