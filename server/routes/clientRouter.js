import express from "express"

const clientRouter = new express.Router()

const clientRoutes = [
  "/",
  "/pet-types/:id",
  "/pet-types",
  "/pets/:id",
  "/pets/:id/adoption-applications"
]

clientRouter.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default clientRouter
