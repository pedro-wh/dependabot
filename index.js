import axios from "axios"

const stripe_api_key = "sk_test_4ec39hqlyjwdarjtt1zdp7dc"

const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto",{headers: {"x-dsi-restful":stripe_api_key}})

console.log(`Hello world! ${result.data?.name}`)