import { useEffect, useState } from "react";
import Pet from "../components/Pet";
import UserPetList from "../components/UserPetList";
import PetForm from "../components/PetForm";


const PetContainer = ({loggedInUser, pets, feedPet, playPet}) => {


   return(
   
   <div className="pet-container">

        {
            loggedInUser
            ? (<UserPetList  playPet={playPet} feedPet={feedPet} pets={pets} />) 
            : (<p>Loading...</p>)
        }
        {/* <PetForm /> */}
        
   </div>
   )



}
export default PetContainer;