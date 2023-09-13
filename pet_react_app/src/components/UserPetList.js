import Pet from "./Pet";


const UserPetList = ({pets, feedPet}) =>{

    const petComponent = pets ? pets.map( pet =>{
        return <Pet
        pet = {pet}
        feedPet={feedPet}
        
        />
    }) : null;

  
    return(
        <div className="pet-component">
        {petComponent}
        </div>
    )

}

export default UserPetList;