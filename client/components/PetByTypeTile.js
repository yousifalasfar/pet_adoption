import React from "react"
import {Link} from "react-router-dom"

const PetByTypeTile = ({ petType: { id, name, age, imgUrl, vaccinationStatus, petType } }) => {
  const isVaccinated = (vaccinationStatus) ? "Yes" : "No"

  return (
    <div className=>
        <Link to={`/pets/${id}`} className="petByTypeContainer grid-x small-12">
          <img className="petByType imgDimensions" src={imgUrl} alt={name} />
        </Link>
      <div className="petByTypeContainer grid-y small-12">
        <Link to={`/pets/${id}`}>
        <h3 className="petByType" >{name}</h3>
        </Link>
        <p className="petByType">Age: {age}</p>
        <p className="petByType">Vaccination Status: {ifVaccinated}</p>
      </div>
    </div>
  )
}

export default PetByTypeTile
