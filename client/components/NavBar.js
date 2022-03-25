import React from "react"
import { Route, Switch, useLocation, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import PetTypeList from "./PetTypeList"
import PetsByType from "./PetsByType"
import PetShow from "./PetShow"
import AddNewPetForm from "./AddNewPetForm"

const NavBar = () => {
  function usePageViews() {
    let location = useLocation()
    let history = useHistory()

    console.log(location.pathname)
    console.log(history.location.pathname)
  }

  usePageViews()
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Pet Adoption Agency</li>
            <Link to={`/`}>Home</Link>
            <Link to={`/pet-types/1`}>Cats</Link>
            <Link to={`/pet-types/2`}>Dogs</Link>
            <Link to={`/pets/new`}>Add pet</Link>
          </ul>
        </div>
      </div>
      <div className="row column">
        <Switch>
          <Route exact path="/pets/new" component={AddNewPetForm} />
          <Route exact path="/pet-types" component={PetTypeList} />
          <Route exact path="/pet-types/:id" component={PetsByType} />
          <Route exact path="/pets/:id" component={PetShow} />
        </Switch>
      </div>
    </div>
  )
}

export default NavBar
