import React from "react"

const PetByTypeTile = ({ petType: { name, age, imgUrl, vaccinationStatus } }) => {
  let ifVaccinated = "No"

  if (vaccinationStatus) {
    ifVaccinated = "Yes"
  }

  return (
    <div>
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Vaccination Status: {ifVaccinated}</p>
    </div>
  )
}

export default PetByTypeTile
