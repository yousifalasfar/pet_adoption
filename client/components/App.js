import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import "../assets/scss/main.scss"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"

const App = props => {
  return (
    <div className="callout primary">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={NavBar} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
