import pg from "pg"
import path from "path"
import LineReader from "line-reader"
import { fileURLToPath } from "url"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet_adoption_agency"
})
//setup __dirname to work with ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//assemble where the text file is located
const petTypesPath = path.join(__dirname, "../../pet_types.txt")
const petsPath = path.join(__dirname, "../../pets.txt")

let petTypesId=[]
class Seeder {
  static async seed() {
    LineReader.eachLine(petTypesPath, async (line, last, done) => {
      const [name, imgUrl, description] = line.split(";")
      const queryString =
      "INSERT INTO pet_types (name, img_url, description) VALUES ($1, $2, $3) RETURNING id;"
      try {
        const result = await pool.query(queryString, [name, imgUrl, description])
        petTypesId.push(result.rows)
        // console.log(petTypesId);
        if (last) {
          pool.end()
        }
        done()
      } catch (error) {
        console.log(`Error: ${error}`)
        done()
      }
    })
  }
}


export default Seeder
