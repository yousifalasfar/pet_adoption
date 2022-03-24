import React, { useState } from "react"
import ErrorList from "./ErrorList"

const ApplicationForm = ({setShowForm, petId, petName, setMessage}) => {
  const [application, setApplication] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: "",
    petId: petId
  })
 
  const [errors, setErrors] = useState([])

  const addNewApplication = async () => {
    try {
      const response = await fetch("/api/v1/pets/:id/adoption-applications", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(application)
      })
      if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        } else {
        const body = await response.json()
        console.log("Posted successfully!", body);
      }
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  
  const handleInputChange = event => {
    setApplication({
      ...application,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      addNewApplication()
      setShowForm(false)
      setMessage("Your application is being processed!")
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "phoneNumber", "email", "homeStatus"]
    requiredFields.forEach(field => {
      if(application[field].trim() === "") {
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
    <div className="appFormContainer grid-x small-12">
      <h1 className="appForm">Adopt {petName}!</h1>
      <div className="appFormContainer grid-y">
        <form className="appForm callout" onSubmit={handleSubmit}>
          <ErrorList errors={errors} />
          <label htmlFor="name">
          Your Name:
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              value={application.name}
            />
          </label>
          <label htmlFor="phoneNumber">
            Phone Number: (format: XXX-XXX-XXXX)
            <input
              type="tel" 
              pattern="^\d{3}-\d{3}-\d{4}$" 
              name="phoneNumber"
              onChange={handleInputChange}
              value={application.phoneNumber}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" 
              name="email"
              onChange={handleInputChange}
              value={application.email}
            />
          </label>
          <label htmlFor="homeStatus">
            Home Status:
            <select value={application.homeStatus} onChange={handleInputChange} name="homeStatus"> 
              <option value=""></option>
              <option value="rent">Rent</option>
              <option value="own">Own</option>
            </select>
          </label>
          <div className="button-group">
            <input className="btn button" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplicationForm