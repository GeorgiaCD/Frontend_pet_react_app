import { useState, useEffect } from 'react';
import './App.css';
import PetContainer from './containers/PetContainer';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PetProfile from './components/PetProfile';
import PetForm from './components/PetForm';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [pets, setPets] = useState([]);



  const fetchUserData = async () => {
    const response = await fetch("http://localhost:8080/users/5");
    const data = await response.json();
    setLoggedInUser(data)
    console.log(loggedInUser);
    setPets(data.pets)

  }

   const deadPetMessage = () => {
            if (pets.length===0) {
              return <p>Pets have died :( better luck next time</p>;
            }
            // else return <p>All pets are healthy</p>
    }

  
    useEffect( () => {
      
        fetchUserData()
        setInterval(fetchUserData, 500)
        setInterval(deadPetMessage,500)

    },[])


    //feed functionality

    const updatePet = (fedPet) => {

      const copiedUser = {...loggedInUser }
      
   
      for (let index = 0; index < copiedUser.pets.length; index++) {
       
       if(fedPet.id === copiedUser.pets[index].id){
           copiedUser.pets.splice(index, 1, fedPet)
       }
      }
      
      const copiedPets = [...copiedUser.pets]
      setLoggedInUser(copiedUser)
      setPets(copiedPets)
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

   const playPet = async (petId) => {
           const response = await fetch(`http://localhost:8080/pets/${petId}/play?toyId=1`, {
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
        {deadPetMessage()}
        {/* <img src = "/cat.gif" /> */}
        <Routes>
          <Route index element={<PetContainer playPet={playPet} feedPet={feedPet} loggedInUser={loggedInUser} pets={pets}/>}></Route>
          <Route path='/pet/:id' element={<PetProfile  playPet={playPet} feedPet={feedPet} pets={pets} />}></Route>
        </Routes>
    </div>
    </BrowserRouter>
    {/* <PetForm /> */}
    </>
  );
}
export default App;
