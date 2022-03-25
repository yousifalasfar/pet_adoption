import React, { useState } from "react"
import ErrorList from "./ErrorList"
import { Redirect } from "react-router-dom"

const AddNewPetForm = props => {
  const [newPet, setNewPet] = useState({
    name: "",
    age: "",
    petTypeId: "",
    imgUrl: "",
    adoptionStory: "",
    vaccinationStatus: false
  })

  const [errors, setErrors] = useState([])
  const [id, setId] = useState(null)

  const addNewPet = async () => {
    try {
      const response = await fetch("/api/v1/pets", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newPet)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        console.log("Posted successfully!", body)
        setId(body.pet.id)
      }
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  if (id) {
    return <Redirect to={`/pets/${id}`} />
  }

  const handleInputChange = event => {
    const inputTarget = event.currentTarget
    let value
    if (inputTarget.type === "checkbox") {
      value = inputTarget.checked
    } else {
      value = inputTarget.value
    }
    setNewPet({
      ...newPet,
      [event.currentTarget.name]: value
    })
  }

  const clearForm = event => {
    event.preventDefault()
    setNewPet({
      name: "",
      age: "",
      petTypeId: "",
      imgUrl: "",
      adoptionStory: "",
      vaccinationStatus: ""
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      addNewPet()
      clearForm(event)
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "age", "petTypeId", "imgUrl", "adoptionStory"]
    requiredFields.forEach(field => {
      if (newPet[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  return (
    <div className="surrender-form">
      <div className="appFormContainer grid-x small-12">
        <div className="appFormContainer grid-y">
          <h1 className="appForm">Surrender A Pet</h1>
          <form className="appForm callout" onSubmit={handleSubmit}>
            <ErrorList errors={errors} />
            <label htmlFor="name">
              Pet Name:
              <input type="text" name="name" onChange={handleInputChange} value={newPet.name} />
            </label>
            <label htmlFor="age">
              Age
              <input type="number" name="age" onChange={handleInputChange} value={newPet.age} />
            </label>
            <label htmlFor="petTypeId">
              Pet Type:
              <select value={newPet.petTypeId} onChange={handleInputChange} name="petTypeId">
                <option value=""></option>
                <option value="1">Cat</option>
                <option value="2">Dog</option>
              </select>
            </label>
            <label htmlFor="imgUrl">
              Image Url:
              <input type="text" name="imgUrl" onChange={handleInputChange} value={newPet.imgUrl} />
            </label>
            <label htmlFor="adoptionStory">
              Adoption Story:
              <input
                type="text"
                name="adoptionStory"
                onChange={handleInputChange}
                value={newPet.adoptionStory}
              />
            </label>
            <label htmlFor="vaccinationStatus">
              Vaccinated?
              <input
                type="checkbox"
                name="vaccinationStatus"
                onChange={handleInputChange}
                value={newPet.vaccinationStatus}
              />
            </label>
            <div className="button-group">
              <input className="btn button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNewPetForm
