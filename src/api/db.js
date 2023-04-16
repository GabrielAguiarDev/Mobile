import axios from "axios"

export default axios.create({
  baseURL: `${process.env.BASE_URL}`,
})

export const api_bible = axios.create({
  baseURL: process.env.URL_BIBLE,
})
