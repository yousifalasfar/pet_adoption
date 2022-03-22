import express from "express"
import clientRouter from "../../clientRouter.js"
import PetType from "../../../models/PetType.js"

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

export default petTypesRouter