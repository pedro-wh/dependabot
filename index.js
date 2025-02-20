import axios from "axios"

const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")

console.log(`Hello world! ${result.data?.name}`)