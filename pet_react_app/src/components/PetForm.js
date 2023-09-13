const PetForm = () => {



    return(<>

        <form className="pet-form">
       <h2 className="form-title">Adopt a Pet</h2>
       
            <input type="text" id="name" name="name"  placeholder="Pet name"  />
            <input type="text" id="species" name="species"  placeholder="Pet species" />
            <input type="text" id="toyIds" name="toysId"  placeholder="Toys" />
            <input type="text" id="foodsId" name="foodsId"  placeholder="Food" />

            <button> Adopt pet</button>
        </form>
    </>)
    
}


export default PetForm;