import { useEffect, useState } from "react";
import Pet from "../components/Pet";
import UserPetList from "../components/UserPetList";
const PetContainer = () => {

const [loggedInUser, setLoggedInUser] = useState([])

const fetchUserData = async () => {
    const response = await fetch("http://localhost:8080/users/5");
    const data = await response.json();
    setLoggedInUser(data)

}


useEffect( () => {
   
    fetchUserData()
    console.log(loggedInUser);

},[])



   return(<>

        {
            loggedInUser
            ? (<UserPetList loggedInUser={loggedInUser} />) 
            : (<p>Loading...</p>)
        }

        
   </>)



}

export default PetContainer;