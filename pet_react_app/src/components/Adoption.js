import PetForm from "./PetForm"

export default function Adoption() {
    return (
      <div className="adoption">
        <img id="banner-img" src='/banner.png'/>
        <div className="adoption-petform">
          <PetForm />
          <h4>Adopt your friend today!</h4>       
        </div>
      </div>
    )
  }