import { useEffect, useState } from "react";
import Pet from "../components/Pet";
const PetContainer = () => {

const [loggedInUser, setLoggedInUser] = useState([])

const fetchUserData = async () => {
    const response = await fetch("http://localhost:8080/users/1");
    const data = await response.json();
    setLoggedInUser(data)

}


useEffect( () => {
   
    fetchUserData()
    console.log(loggedInUser);

},[])



   return(<>
        <Pet loggedInUser={loggedInUser}/>
   </>)




}

export default PetContainer;