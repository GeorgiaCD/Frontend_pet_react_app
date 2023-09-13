import Pet from "./Pet";


const UserPetList = ({loggedInUser, feedPet}) =>{

    const petComponent = loggedInUser.pets ? loggedInUser.pets.map( pet =>{
        return <Pet
        pet = {pet}
        loggedInUser={loggedInUser}
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