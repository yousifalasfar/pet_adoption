import express from "express"
import Pet from "../../../models/Pet.js"

const petsRouter = new express.Router()

petsRouter.get("/:id", async (req, res)=>{
  try {
    const pet = await Pet.findById(req.params.id)
    res.status(200).json({ pet })
  } catch (errors) {
    console.error(errors)
    res.status(500).json({ errors })
  }
})

export default petsRouter