import React from "react"
import { Route, Switch } from "react-router-dom"
import { Link } from "react-router-dom"
import PetTypeList from "./PetTypeList"
import PetsByType from "./PetsByType"
import PetShow from "./PetShow"
import AddNewPetForm from "./AddNewPetForm"

const NavBar = () => {
  return (
    <div>
      <div className="nav-bar">
        <div class="top-bar">
          <div class="top-bar-left">
            <img
              id="logo"
              src="https://i.pinimg.com/originals/25/21/46/2521462584f1ce87b3dbdf580b74ffe8.png"
            ></img>
            <div class="dropdown menu" data-dropdown-menu>
              <Link to="/">Home</Link>
              <Link to="/pet-types/1">Available Cats</Link>
              <Link to="/pet-types/2">Available Dogs</Link>
              <Link to="/pets/new">List A Pet</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="callout primary">
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
