import { useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";


const PetProfile = ({pets, playPet, feedPet}) => {


  
  const{id} = useParams(); //matches :id in the router tags
  
  const foundPet = pets.find((pet) => pet.id==id)



  if (!foundPet) {
      return <h2 className="no-pets-message">No pets available</h2>;
    }

  const handleFeed = (petId) =>{
    if (foundPet.energyLevel <= 80){
      feedPet(petId)
    }
  }
  const handlePlay = (petId) =>{
    if (foundPet.happinessLevel <= 80){
      playPet(petId)
    }
  }
    
    const happinessBarColor =
    foundPet.happinessLevel < 26 ? "red" :"#4caf50"; 
    
    const energyBarColor =
     foundPet.energyLevel < 26 ? "red" : "#4caf50"; 
  
    return (
      <div className="pet">
        <h2 className="pet-name">{foundPet.name}</h2>
        <img className= "pet-profile-image" src={`/pet_${foundPet.species}.webp`} ></img>
        <h3 className="pet-specie">{foundPet.species}</h3>
        
        <div className="happiness-bar" >
        <p className="happiness-bar-text">Happiness level: {foundPet.happinessLevel}/100</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${foundPet.happinessLevel}%`,
              backgroundColor: happinessBarColor, 
            }}
            aria-valuenow={foundPet.happinessLevel}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {foundPet.happinessLevel}
          </div>
        </div>
        </div>
  
        <div className="energy-bar" >
        <p className="energy-bar-text">Energy level: {foundPet.energyLevel}/100</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${foundPet.energyLevel}%`,
              backgroundColor: energyBarColor,
            }}
            aria-valuenow={foundPet.energyLevel}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {foundPet.energyLevel}
          </div>
        </div>
      </div>

      <div className="toy-profile-list">
          <ul>
              <h3 className="list-title">Toys</h3>
              {foundPet.toys.map((toy, index) => (
                <li key={index}>{toy.name} - {toy.happinessValue}</li>
              ))}
          </ul>
      </div>
          <ul>
              <h3>Foods</h3>
              {foundPet.foods.map((food, index) => (
                <li key={index}>{food.name} - {food.nutritionValue}</li>
              ))}
          </ul>
         
          <button onClick={() => handlePlay(foundPet.id)}>Play me</button>
          <button onClick={() => handleFeed(foundPet.id)}>Feed me</button>
          <Link to={"/"}>Back</Link>
      </div>
      
    );
  };
  
  export default PetProfile;
  