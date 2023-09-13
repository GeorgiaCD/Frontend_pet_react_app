import { useState, useEffect } from 'react';
import './App.css';
import PetContainer from './containers/PetContainer';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PetProfile from './components/PetProfile';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [pets, setPets] = useState([]);

  const fetchUserData = async () => {
    const response = await fetch("http://localhost:8080/users/5");
    const data = await response.json();
    setLoggedInUser(data)
    setPets(data.pets)

  }

 

    useEffect( () => {
      
        fetchUserData()
        console.log(loggedInUser);

    },[])


    //feed functionality

    const updatePet = (fedPet) => {

      const copiedUser = {...loggedInUser }
   
      for (let index = 0; index < copiedUser.pets.length; index++) {
       
       if(fedPet.id === copiedUser.pets[index].id){
           copiedUser.pets.splice(index, 1, fedPet)
       }
     
      }
      setLoggedInUser(copiedUser)
      console.log( "copied user: ", copiedUser);
   
       
   }
   
   const feedPet = async (petId) => {
           const response = await fetch(`http://localhost:8080/pets/${petId}/feed?foodId=1`, {
             method: 'PATCH',
             headers: {
               'Content-Type': 'application/json',
   
             },
           })
           const data = await response.json()
               console.log("data: ", data);
           updatePet(data.body);
           } 

  return (
    <>
    <h2>Virtual Pet</h2>
    {/* <PetContainer /> */}
    <BrowserRouter>
    <div className="App">
        {/* <NavLink to="/">Home</NavLink> */}
        <h1>Pets!</h1>
        <Routes>
          <Route index element={<PetContainer feedPet={feedPet} loggedInUser={loggedInUser} pets={pets}/>}></Route>
          <Route path='/pet/:id' element={<PetProfile pets={pets} />}></Route>
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;
