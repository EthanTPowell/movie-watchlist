import './components/assets/styles/baselayout.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import WatchList from './components/WatchList';
import Favorites from './components/Favorites';

function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<WatchList/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
  </Router>
    

  </>
}

export default App;
