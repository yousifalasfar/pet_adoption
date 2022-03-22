import pg from "pg"

const pool = new pg.Pool({
connectionString: "postgres://postgres:password@localhost:5432/pet_adoption_agency"
})

class PetType {
    constructor ({id, name, img_url, imgUrl, description}) {
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
        throw(err)
    }
  }
}

export default PetType