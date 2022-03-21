import pg from "pg"
import path from "path"
import LineReader from "line-reader"
import { fileURLToPath } from "url"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/<name_of_database>"
})
//setup __dirname to work with ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//assemble where the text file is located



class Seeder {
  static async seed() {
   
  }
}


export default Seeder
