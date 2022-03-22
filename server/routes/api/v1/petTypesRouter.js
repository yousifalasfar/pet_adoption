import express from "express"
import PetType from "../../../models/PetType.js"
import Pet from "../../../models/Pet.js"

const petTypesRouter = new express.Router()

petTypesRouter.get("/", async (req, res) => {
  try {
    const petTypes = await PetType.findAll()
    res.status(200).json({ petTypes })
  } catch (errors) {
    console.error(errors)
    res.status(500).json({ errors })
  }
})

petTypesRouter.get("/:id", async (req, res) => {
  try {
    const petByType = await Pet.findById(req.params.id)
    res.status(201).json({ petByType })
  } catch (errors) {
    console.error(errors)
    res.status(500).json({ errors })
  }
})

export default petTypesRouter
