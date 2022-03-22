import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import "../assets/scss/main.scss"

import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetTypeList from "./PetTypeList"

const App = props => {
  return (
    <div className="callout primary">
      <BrowserRouter>
        <Switch>
          <Route exact path="/pet-types" component={PetTypeList} />
        </Switch>
      </BrowserRouter>
    </div>
  )}

export default hot(App)
