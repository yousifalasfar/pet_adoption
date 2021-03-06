import React from "react"
import { Link } from "react-router-dom"

const PetByTypeTile = ({ petType: { id, name, age, imgUrl, vaccinationStatus, petType } }) => {
  const ifVaccinated = vaccinationStatus ? "Yes" : "No"

  return (
    <div className="petListTile">
      <div className="pet-img">
        <Link to={`/pets/${id}`} className="petByTypeContainer grid-x small-12">
          <img className="petByType imgDimensions" src={imgUrl} alt={name} />
        </Link>
      </div>
      <div className="petByTypeContainer grid-y small-12">
        <Link to={`/pets/${id}`}>
          <h3 className="petByType">{name}</h3>
        </Link>
        <p className="petByType">Age: {age}</p>
        <p className="petByType">Vaccinated: {ifVaccinated}</p>
      </div>
    </div>
  )
}

export default PetByTypeTile
