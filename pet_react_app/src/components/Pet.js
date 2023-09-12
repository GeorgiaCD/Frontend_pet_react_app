
const Pet = ({ pet }) => {
  if (!pet) {
    return <h2>No pets available</h2>;
  }

  
  const happinessBarColor =
  pet.happinessLevel < 26 ? "red" :"#4caf50"; 
  
  const energyBarColor =
   pet.energyLevel < 26 ? "red" : "#4caf50"; 

  return (
    <div className="pet">
      <h2>{pet.name}</h2>
      <img src={`/pet_${pet.species}.webp`} ></img>
      <h3>{pet.species}</h3>
      
      <div className="happiness-bar" >
      <p>Happiness level: {pet.happinessLevel}/100</p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${pet.happinessLevel}%`,
            backgroundColor: happinessBarColor, // Set background color
          }}
          aria-valuenow={pet.happinessLevel}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {pet.energyLevel}
        </div>
      </div>
      </div>

      <div className="energy-bar" >
      <p>Energy level: {pet.energyLevel}/100</p>
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

    <ul>
            <h3>Toys</h3>
            {pet.toys.map((toy, index) => (
              <li key={index}>{toy.name} - {toy.happinessValue}</li>
            ))}
        </ul>
        <ul>
            <h3>Foods</h3>
            {pet.foods.map((food, index) => (
              <li key={index}>{food.name} - {food.nutritionValue}</li>
            ))}
        </ul>
        <button>Play with me</button>
        <button>Feed me</button>
    </div>
    
  );
};

export default Pet;
