import React from "react"

const PetByTypeTile = ({ petType: { id, name, age, imgUrl, vaccinationStatus } }) => {
  let ifVaccinated = "No"

  if (vaccinationStatus) {
    ifVaccinated = "Yes"
  }

  return (
    <div>
      <Link to={`/pets/${id}`}>
        <img src={imgUrl} alt={name} />
      </Link>
      <Link to={`/pets/${id}`}>
      <h3>{name}</h3>
      </Link>
      <p>Age: {age}</p>
      <p>Vaccination Status: {ifVaccinated}</p>
    </div>
  )
}

export default PetByTypeTile
