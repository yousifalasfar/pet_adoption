import React, { useState, useEffect } from "react"
import PetByTypeTile from "./PetByTypeTile"

const PetsByType = props => {
  const [petsByType, setPetsByType] = useState({ pets: [] })

  const getPetsByType = async () => {
    try {
      const id = props.match.params.id
      const response = await fetch(`/api/v1/pet-types/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setPetsByType(responseBody.petType)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getPetsByType()
  }, [])

  const petByTypeList = petsByType.pets.map(petByType => {
    return <PetByTypeTile key={petByType.id} petType={petByType} />
  })
  return (
    <div className="petsByTypeContainer grid-x small-12">
      <h1 className="petsByType">
        Adoptable <span className="petsByType">{petsByType.name}</span>
      </h1>
      <div className="petsByTypeContainer grid-y">
        <div>{petByTypeList}</div>
      </div>
    </div>
  )
}

export default PetsByType
