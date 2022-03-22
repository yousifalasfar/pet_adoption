import express from "express"

const clientRouter = new express.Router()

const clientRoutes = ["/", "/pet-types", "/pet-types/:id"]

clientRouter.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default clientRouter
