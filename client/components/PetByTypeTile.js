import React from "react"

const PetByTypeTile = props => {
  const { name, age, imgUrl, vaccinationStatus } = props.petType
  let ifVaccinated = ""

  if (vaccinationStatus === "true") {
    ifVaccinated = "Yes"
  } else {
    ifVaccinated = "No"
  }

  return (
    <div>
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>{age}</p>
      <p>Vaccination Status: {ifVaccinated}</p>
    </div>
  )
}

export default PetByTypeTile
