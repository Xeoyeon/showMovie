import React from "react";
import {
    MovieContainer,
    MovieImg,
    MovieInfo,
    MovieTitle,
    MovieVote,
    OverviewContainer,
  } from './Movie.style.jsx';
import { useNavigate } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/w1280/";


export default function Movie(props){//그냥 props하면 되네..?
    //Movie라는 함수형 컴포넌트를 정의하고 외부에서 사용할 수 있도록 내보내고 있습니다. 
    //export default 문을 사용하여 이 컴포넌트를 다른 파일에서 import 할 수 있게 됩니다.
    const navigate= useNavigate();
    const onClickMovieItem =()=>{
        navigate(`/movie/${props.title}`,{state:props})
        // state: props는 특정 경로로 이동할 때, 해당 경로로 전달되는 상태(state)를 설정하는 부분으로,
        // 예를 들어, 주어진 코드에서는 onClickMovieItem 함수가 호출되면 /movie/${props.title}로 이동하면서 props 객체를 해당 경로의 상태로 함께 전달하고 있습니다.
        // 전달된 상태는 목표 경로에서 useLocation 훅을 사용하여 접근
        
        // 여기를 왜 백틱으로 감싸지? => 주로 동적인 값을 포함하는 문자열을 생성하기 위해 사용.문자열 안에서 변수나 표현식을 쉽게 삽입
    }
    return(
        <MovieContainer onClick={onClickMovieItem}> {/* onclick시 함수가 작동하도록함. 이 함수를 리턴 위에 ㅈ정의하면 돼 */}
            <OverviewContainer>
                {props.overview}
            </OverviewContainer>
            <MovieImg src={base_url+props.poster_path} alt={props.title}/>
            <MovieInfo>
                <MovieTitle>{props.title}</MovieTitle>
                <MovieVote>{props.vote_average}</MovieVote>
            </MovieInfo>
        </MovieContainer>

    )
}