import{BrowserRouter, Route, Routes} from "react-router-dom"
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV"
import Movies from "./pages/Movies";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        {/* router에 영향받지 않고 고정시키고 싶다면 routes 태그 밖에 써준다 */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          {/* 처음에 태그 처럼 안쓰고 {Home}이런식으로 써서 화면에 안보인것 */}
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />}/>

          <Route path="/tv" element={<TV />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
          {/* //path는 이동할 경로, element는 이동한 경로에서 띄워줄 컴포넌트를 의미 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

