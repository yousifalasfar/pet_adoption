import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import "../assets/scss/main.scss"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetTypeList from "./PetTypeList"
import PetsByType from "./PetsByType"
import PetShow from "./PetShow"
import AddNewPetForm from "./AddNewPetForm"
import NavBar from "./NavBar"

const App = props => {
  return (
    <div className="callout primary">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={NavBar} />
          {/* <Route exact path="/pets/new" component={AddNewPetForm} />
          <Route exact path="/pet-types" component={PetTypeList} />
          <Route exact path="/pet-types/:id" component={PetsByType} />
          <Route exact path="/pets/:id" component={PetShow} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
