import { Route, Routes} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Films from './Components/Films/Films';
import People from './Components/People/People';
import Planets from './Components/Planets/Planets';
import Species from './Components/Species/Species';
import Starships from './Components/Starships/Starships';
import Vehicles from './Components/Vehicles/Vehicles';
import Leftlist from './Components/LeftList/Leftlist';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <div className="parent">
      <div className="left">
      <Leftlist />
      </div>
      <div className="right">
      <Routes >
        <Route exact path='/' Component={Dashboard}/>
        <Route path='/films' Component={Films}/>
        <Route path='/people' Component={People}/>
        <Route path='/planets' Component={Planets}/>
        <Route path='/species' Component={Species}/>
        <Route path='/starships' Component={Starships}/>
        <Route path='/vehicles' Component={Vehicles}/>
      </Routes>
      </div>
      </div>
      </>
  );
}

export default App;
