import {Link} from "react-router-dom";
import PetModal from "./PetModal";

const Pet = ({pet, feedPet}) => {
  if (!pet) {
    return <h2>No pets available</h2>;
  }
const handleFeed = (petId) =>{
  if (pet.energyLevel <= 80){
    feedPet(petId)
  }

// const handlePlay = (petId) =>{
//   if (pet.happinessLevel <= 80){
//     playPet(petId)
//   }



}
  
  const happinessBarColor =
  pet.happinessLevel < 26 ? "red" :"#4caf50"; 
  
  const energyBarColor =
   pet.energyLevel < 26 ? "red" : "#4caf50"; 

  return (
    <div className="pet">
      <h2 className="pet-name">{pet.name}</h2>
      <img className="pet-image" src={`pet_images/pet_${pet.species}1.gif`} ></img>
      <h3 className="pet-specie">{pet.species}</h3>
      
      <div className="happiness-bar" >
      <p className="happiness-bar-text">Happiness level: {pet.happinessLevel}/100</p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${pet.happinessLevel}%`,
            backgroundColor: happinessBarColor, 
          }}
          aria-valuenow={pet.happinessLevel}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {pet.happinessLevel}
        </div>
      </div>
      </div>

      <div className="energy-bar" >
      <p className="energy-bar-text">Energy level: {pet.energyLevel}/100</p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${pet.energyLevel}%`,
            backgroundColor: energyBarColor,
          }}
          aria-valuenow={pet.energyLevel}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {pet.energyLevel}
        </div>
      </div>
    </div>

      
        <Link to={"/pet/"+pet.id}>Interact</Link>
        <PetModal pet={pet} />
    </div>
    
  );
};


export default Pet;
