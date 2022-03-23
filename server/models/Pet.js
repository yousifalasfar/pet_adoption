import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet_adoption_agency"
})

class Pet {
  constructor({
    id,
    name,
    img_url,
    imgUrl,
    age,
    vaccination_status,
    vaccinationStatus,
    adoption_story,
    adoptionStory,
    available_for_adoption,
    availableForAdoption,
    pet_type_id,
    petTypeId
  }) {
    this.id = id
    this.name = name
    this.imgUrl = img_url || imgUrl
    this.age = age
    this.vaccinationStatus = vaccination_status || vaccinationStatus
    this.adoptionStory = adoption_story || adoptionStory
    this.availableForAdoption = available_for_adoption || availableForAdoption
    this.petTypeId = pet_type_id || petTypeId
  }

  static async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM pets WHERE id= $1", [id])
      const petData = result.rows[0]
      const pet = new Pet(petData)

      return pet
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

export default Pet
