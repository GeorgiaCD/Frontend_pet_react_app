import { useEffect, useState } from "react";
import Pet from "../components/Pet";
import UserPetList from "../components/UserPetList";


const PetContainer = ({loggedInUser, pets, feedPet, playPet}) => {


   return(<>

        {
            loggedInUser
            ? (<UserPetList  playPet={playPet} feedPet={feedPet} pets={pets} />) 
            : (<p>Loading...</p>)
        }

        
   </>)



}
export default PetContainer;