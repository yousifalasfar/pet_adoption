import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet_adoption_agency"
})

class AdoptionApplication {
  constructor({
    id,
    name,
    phone_number,
    phoneNumber,
    home_status,
    homeStatus,
    email,
    application_status = "pending",
    applicationStatus = "pending",
    pet_id,
    petId
  }) {
    this.id = id
    this.name = name
    this.phoneNumber = phone_number || phoneNumber
    this.homeStatus = home_status || homeStatus
    this.email = email
    this.applicationStatus = application_status || applicationStatus
    this.petId = pet_id || petId
  }

  async save() {
    try {
      const result = await pool.query(
        "INSERT INTO adoption_applications (name, phone_number, home_status, email, application_status, pet_id) VALUES ($1, $2, $3, $4, $5, $6) returning id",
        [
          this.name,
          this.phoneNumber,
          this.homeStatus,
          this.email,
          this.applicationStatus,
          this.petId
        ]
      )
      this.id = result.rows[0].id
      return true
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

export default AdoptionApplication
