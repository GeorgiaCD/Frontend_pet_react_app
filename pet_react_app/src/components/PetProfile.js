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
      <div className="pet-profile-container">
      <div id="grid-container">
        <div className="toy-profile-list">
          <ul>
              <h3 className="list-title">Toys</h3>
              {foundPet.toys.map((toy, index) => (
                <div key={index}>
                  <img className="toy-img" src ={`/List_Images/toy_${toy.name}.png`} onClick={() => handlePlay(foundPet.id)}></img>
                  {toy.name} - {toy.happinessValue}</div>
              ))}
          </ul>
        </div>
        <div className="pet-status">
        <div className="pet-profile">
          <h2 className="pet-name">{foundPet.name}</h2>
          <img className= "pet-profile-image" src={`/pet_images/pet_${foundPet.species}2.gif`} ></img>
          <h3 className="pet-specie">{foundPet.species}</h3>
        </div>
    
        <div className="status">
          <div className="happiness-bar" >
            <p className="happiness-bar-text">Happiness level: {foundPet.happinessLevel}/100</p>
            <div className="progress">
              <div className="progress-bar"
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
              <div className="progress-bar"
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
        </div>
        </div>

        <div className="food-profile-list">
          <ul>
              <h3>Foods</h3>
              {foundPet.foods.map((food, index) => (
                <div key={index}>
                  <img className="food-img" src ={`/List_Images/food_${food.name}.png`} onClick={() => handleFeed(foundPet.id)} ></img>
                  {food.name} - {food.nutritionValue}</div>
              ))}
          </ul>
         
          
          
          
          
        </div>
        
      </div>
      <div className="pet-profile-link">
      <Link id="back-link"  to={"/"}>Back</Link>
      </div>
      </div>
      
      
    );
  };
  
  export default PetProfile;
  