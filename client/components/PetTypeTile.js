import React from "react"
import { Link } from "react-router-dom"

const PetTypeTile = ({petType: {id, name, imgUrl, description}}) => {

  return (
    <div>
      <Link to={`/pet-types/${id}`}>
        <img src={imgUrl} alt={name} />
      </Link>
      <Link to={`/pet-types/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>{description}</p>
    </div>
  )
}

export default PetTypeTile
