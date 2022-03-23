import pg from "pg"

import Pet from "./Pet.js"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet_adoption_agency"
})

class PetType {
  constructor({ id, name, img_url, imgUrl, description }) {
    this.id = id
    this.name = name
    this.imgUrl = img_url || imgUrl
    this.description = description
  }

  static async findAll() {
    try {
      const result = await pool.query("SELECT * FROM pet_types;")
      const petTypeData = result.rows
      const petTypes = petTypeData.map(petType => new PetType(petType))

      return petTypes
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM pets WHERE pet_type_id= $1", [id])
      const petByTypeData = result.rows
      const petsByType = petByTypeData.map(petByType => new Pet(petByType))

      return petsByType
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

export default PetType
