
import './App.css';
import Carouselone from './Components/Carouselone';
import Home from './Components/Home';
import AllRoutes from './Components/AllRoutes';
import Datafetch from './Components/Datafetch';

function App() {
  return (
    <div className="App">
     <AllRoutes/>
     <Datafetch/>
      {/* <Carouselone /> */}
    </div>
  );
}

export default App;
