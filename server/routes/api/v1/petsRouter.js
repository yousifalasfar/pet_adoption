import express from "express"
import Pet from "../../../models/Pet.js"
import AdoptionApplication from "../../../models/AdoptionApplication.js"

const petsRouter = new express.Router()

petsRouter.get("/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id)
    if (pet) {
      res.status(200).json({ pet })
    } else {
      res.status(404).json({ errors: error })
    }
  } catch (errors) {
    console.error(errors)
    res.status(500).json({ errors })
  }
})

petsRouter.post("/:id/adoption-applications", async (req, res) => {
  try {
    const newAdoptionApplication = new AdoptionApplication(req.body)
    await newAdoptionApplication.save()
    res.status(201).json({ newAdoptionApplication })
  } catch (errors) {
    console.error(errors)
    res.status(500).json({ errors })
  }
})

petsRouter.post("/", async (req, res) => {
  try {
    debugger
    const pet = new Pet(req.body)
    await pet.save()
    res.status(201).json({ pet })
  } catch (errors) {
    console.error(errors)
    res.status(500).json({ errors })
  }
})

export default petsRouter
