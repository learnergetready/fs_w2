import axios from "axios"
const allUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getAll = () => 
  axios
    .get(allUrl)
    .then(response => response.data)

export default {getAll}