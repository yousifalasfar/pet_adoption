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
      const query = "SELECT * FROM pet_types WHERE ID = $1;"
      const result = await pool.query(query, [id])
      const petTypeData = result.rows[0]
      const petType = new PetType(petTypeData)

      return petType
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async pets() {
    const petFile = await import ("./Pet.js")
    const Pet = petFile.default
    try {
      const query = `SELECT * FROM pets WHERE pet_type_id = $1;`
      const result = await pool.query(query, [this.id])
      
      const relatedPetsData = result.rows
      const relatedPets = relatedPetsData.map(pet => new Pet(pet))

      return relatedPets
    } catch (err) {
      console.error(err)
      throw(err)
    }
  }
}

export default PetType
