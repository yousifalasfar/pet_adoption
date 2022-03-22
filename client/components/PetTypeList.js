import React, { useState, useEffect } from "react"
import PetTypeTile from "./PetTypeTile"

const PetTypeList = props => {
  const [petTypes, setPetTypes] = useState([])
    
  const getPetTypes = async () => {
    try {
      const response = await fetch("/api/v1/pet-types")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setPetTypes(responseBody.petTypes)
      
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
      getPetTypes()
  }, [])

  const petTypesList = petTypes.map(petType => {
      return (
          <PetTypeTile key={petType.id} petType={petType}/>
      )
  })
  return (
    <div>
      <h1>Welcome to our Pet Adoption Agency</h1>
      {petTypesList}
    </div>
  )
}

export default PetTypeList