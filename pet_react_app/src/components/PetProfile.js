import { useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";


const PetProfile = ({pets}) => {

const [pet, setPet] = useState(null)
  
const{id} = useParams(); //matches :id in the router tags
  
useEffect(() => {
  
  const foundPet = pets.find((pet) => pet.id==id)
  setPet(foundPet)
  console.log(foundPet);
},[])

  if (!pet) {
      return <h2 className="no-pets-message">No pets available</h2>;
    }

  // const handleFeed = (petId) =>{
  //   if (pet.energyLevel <= 80){
  //     feedPet(petId)
  //   }
  // }
    
    const happinessBarColor =
    pet.happinessLevel < 26 ? "red" :"#4caf50"; 
    
    const energyBarColor =
     pet.energyLevel < 26 ? "red" : "#4caf50"; 
  
    return (
      <div className="pet">
        <h2 className="pet-name">{pet.name}</h2>
        <img className= "pet-profile-image" src={`/pet_${pet.species}.webp`} ></img>
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

      <div className="toy-profile-list">
          <ul>
              <h3 className="list-title">Toys</h3>
              {pet.toys.map((toy, index) => (
                <li key={index}>{toy.name} - {toy.happinessValue}</li>
              ))}
          </ul>
      </div>
          <ul>
              <h3>Foods</h3>
              {pet.foods.map((food, index) => (
                <li key={index}>{food.name} - {food.nutritionValue}</li>
              ))}
          </ul>
          <button>Play with me</button>
          {/* <button onClick={() => handleFeed(pet.id)}>Feed me</button> */}
          <Link to={"/"}>Back</Link>
      </div>
      
    );
  };
  
  export default PetProfile;
  