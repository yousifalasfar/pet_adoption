import React, {useState, useEffect} from "react"

const PetShow = props => {
const [pet, setPet] = useState({})

const getPet = async () => {
  try {
    const id = props.match.params.id
    const response = await fetch(`/api/v1/pets/${id}`)
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw error
    }
    const responseBody = await response.json()
    setPet(responseBody.pet)
  } catch (error) {
    console.error(`Error in Fetch: ${error.message}`)
  }
}

useEffect(() => {
  getPet()
}, [])

return (
  <div className="petShowContainer grid-x small-12">
    <img className="petShow" src={pet.imgUrl} alt={pet.name} />
    <h3 className="petShow">{pet.name}</h3>
    <p className="petShow">Age: {pet.age}</p>
    <p className="petShow">Vaccination Status: {pet.vaccinationStatus}</p>
    <p className="petShow">Adoption Story: {pet.adoptionStory} </p>
  </div>
)
}

export default PetShow