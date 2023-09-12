import './App.css';
import PetContainer from './containers/PetContainer';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PetProfile from './components/PetProfile';

function App() {
  const [pets, setPets] = useState([]);
  return (
    <>
    <h2>Virtual Pet</h2>
    {/* <PetContainer /> */}
    <BrowserRouter>
    <div className="App">
        {/* <NavLink to="/">Home</NavLink> */}
        <Routes>
          <Route index element={<PetContainer pets={pets}/>}></Route>
          <Route path='/pets/:id' element={<PetProfile pets={pets}/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;
