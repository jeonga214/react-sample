
import './App.scss';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/react-basic'>
      <div className="wrap">
      <header>
        <nav>
          <Link to="/"> HOME </Link>
          <Link to="/css"> CSS 활용 </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/css' element={<Css/>}/>
          <Route path='/*' element={<Not/>}/>
        </Routes>
      </main>

    </div>
    </BrowserRouter>
  );
}

export default App;
