const Pet = ({ loggedInUser }) => {
    if (!loggedInUser || !loggedInUser.pets || loggedInUser.pets.length === 0) {
      return <h2>No pets available</h2>;
    }
  
    return (
      <>
      
        <h2>{loggedInUser.pets[0].name}</h2>
        <h3> {loggedInUser.pets[0].species}</h3>

      </>
    );
  };
  
  export default Pet;