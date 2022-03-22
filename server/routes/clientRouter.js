import express from "express"

const clientRouter = new express.Router()

const clientRoutes = ["/", "/pet-types"]
clientRouter.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default clientRouter
