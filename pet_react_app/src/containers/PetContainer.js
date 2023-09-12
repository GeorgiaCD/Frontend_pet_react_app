import { useEffect, useState } from "react";
import Pet from "../components/Pet";
import UserPetList from "../components/UserPetList";
const PetContainer = () => {

// const [loggedInUserPets, setLoggedInUserPets] = useState({})

const [loggedInUser, setLoggedInUser] = useState([])


const fetchUserData = async () => {
    const response = await fetch("http://localhost:8080/users/5");
    const data = await response.json();
    setLoggedInUser(data)

}

const updatePet = (fedPet) => {

   const copiedUser = loggedInUser 

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


useEffect( () => {
   
    fetchUserData()
    console.log(loggedInUser);

},[])



   return(<>

        {
            loggedInUser
            ? (<UserPetList feedPet={feedPet} loggedInUser={loggedInUser} />) 
            : (<p>Loading...</p>)
        }

        
   </>)



}
export default PetContainer;