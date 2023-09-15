import Pet from "./Pet";


const UserPetList = ({pets, feedPet}) =>{

    const petComponent = pets ? pets.map( pet =>{
        return <Pet
        pet = {pet}
        feedPet={feedPet}
        
        />
    }) : null;

  
    return(
        <div className="user-pet-list">
            <div className="banner">
                <img id="banner-img" src='/banner.png'/>
            </div>
            <div className="pet-component">
                {petComponent}
            </div>
            
        </div>
    )

}

export default UserPetList;