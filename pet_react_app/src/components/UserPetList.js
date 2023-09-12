import Pet from "./Pet";


const UserPetList = ({loggedInUser}) =>{

    const petComponent = loggedInUser.pets ? loggedInUser.pets.map( pet =>{
        return <Pet
        key = {pet.id}
        pet = {pet}
        />
    }) : null;

  
    return(
        <>
        {petComponent}
        </>
    )

}

export default UserPetList;