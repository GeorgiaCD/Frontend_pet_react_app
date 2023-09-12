const Pet = ({ loggedInUser }) => {
    if (!loggedInUser || !loggedInUser.pets || loggedInUser.pets.length === 0) {
      return <h2>No pets available</h2>;
    }
  
    return (
      <div className="Pet">
        <h2>{loggedInUser.pets[0].name}</h2>
        <h3> {loggedInUser.pets[0].species}</h3>
        <p>Happiness level: {loggedInUser.pets[0].happinessLevel}/100</p>
        <p>Energy level: {loggedInUser.pets[0].energyLevel}/100</p>
        <ul>
            <h3>Toys</h3>
            {loggedInUser.pets[0].toys.map((toy, index) => (
              <li key={index}>{toy.name} - {toy.happinessValue}</li>
            ))}
        </ul>
        <ul>
            <h3>Foods</h3>
            {loggedInUser.pets[0].foods.map((food, index) => (
              <li key={index}>{food.name} - {food.nutritionValue}</li>
            ))}
        </ul>
      </div>
    );
  };
  
  export default Pet;