import React, { useState, useEffect } from "react"
import ApplicationForm from "./ApplicationForm"

const PetShow = props => {
  const [pet, setPet] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [message, setMessage] = useState(null)

  const ifVaccinated = pet.vaccinationStatus ? "Yes" : "No"

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

  const handleClick = () => {
    showForm = showForm ? setShowForm(false) : setShowForm(true)
  }

  const renderForm = () => {
    const id = props.match.params.id
    return (
      <ApplicationForm
        setShowForm={setShowForm}
        petId={id}
        petName={pet.name}
        setMessage={setMessage}
      />
    )
  }

  return (
    <div className="petShowContainer grid-x small-12 petListTile">
      <img className="petShow imgDimensions pet-img" src={pet.imgUrl} alt={pet.name} />
      <div className="petShowContainer grid-y">
        <h3 className="petShow">{pet.name}</h3>
        <p className="petShow">Age: {pet.age}</p>
        <p className="petShow">Vaccinated: {ifVaccinated}</p>
        <p className="petShow">Adoption Story: {pet.adoptionStory} </p>
      </div>
      <div className="petShowContainer petShow">
        <button onClick={handleClick} className="btn button">
          Adopt Me!
        </button>
      </div>
      <div className="petShow">
        {showForm ? renderForm() : null}

        <h2 id="message">{message ? message : null}</h2>
      </div>
    </div>
  )
}

export default PetShow
