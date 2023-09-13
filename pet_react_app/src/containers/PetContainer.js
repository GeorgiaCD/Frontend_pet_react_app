import { useEffect, useState } from "react";
import Pet from "../components/Pet";
import UserPetList from "../components/UserPetList";
import PetForm from "../components/PetForm";


const PetContainer = ({loggedInUser, pets, feedPet, playPet}) => {


   return(<>

        {
            loggedInUser
            ? (<UserPetList  playPet={playPet} feedPet={feedPet} pets={pets} />) 
            : (<p>Loading...</p>)
        }
        <PetForm />
        
   </>)



}
export default PetContainer;