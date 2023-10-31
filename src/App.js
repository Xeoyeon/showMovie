//import로 데이터를 가져올 수 있다.
import React from 'react';
import { mvInfo } from "./movieInfo";
import Movie from './components/Movie.jsx'
import { AppContainer } from "./components/Movie.style";

function App() {//react component를 정의하는 부분
  return (
  //컴포넌트가 렌더링할 JSX (JavaScript XML)를 반환하는 부분입니다. 
  //JSX는 React에서 UI를 표현하는 방법으로 HTML과 유사하지만 JavaScript 코드와 함께 사용할 수 있습니다.
      <AppContainer>
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
          //map 함수는 배열을 순회하면서 각 요소를 변환한 결과를 새로운 배열로 반환
        }
      </AppContainer>
  );
}

export default App;
// App 컴포넌트를 다른 파일에서 가져와 사용할 수 있도록 내보내는 부분입니다. 
//다른 파일에서 이 컴포넌트를 import하여 사용할 수 있게 됩니다.
