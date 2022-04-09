import axios from "axios"

export const shrtcode = axios.create({
  baseURL: 'https://api.shrtco.de/v2'
})