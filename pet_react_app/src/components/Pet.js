const Pet = ({ pet }) => {
    if (!pet) {
      return <h2>No pets available</h2>;
    }
  
    return (
      <div className="Pet">
        <h2>{pet.name}</h2>
        <h3> {pet.species}</h3>
        <p>Happiness level: {pet.happinessLevel}/100</p>
        <p>Energy level: {pet.energyLevel}/100</p>
        

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
      </div>
    );
  };
  
  export default Pet;