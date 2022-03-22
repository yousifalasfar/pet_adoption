import React from 'react'

const PetTypeTile = (props) => {
  const {name, imgUrl, description} = props.petType
    
  return (
    <div>
      <img src={imgUrl} alt={name}/>
      <h2>{name}</h2>
      <p>{description}</p>     
    </div>
  )
}

export default PetTypeTile