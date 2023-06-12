
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiUrl = process.env.NEXT_PUBLIC_SUB_BASE_URL;

const Axios = axios.create({
  baseURL: baseUrl,
  timeout: 5000000,
  headers: {
    "Content-Type": "application/json",

    'X-RapidAPI-Key': '51b6c63aa8msh254db2a49243359p1a806ajsn3f8988b8d550',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'

  },
});
// //  GET Request
export async function getplanetData() {
  const response = await Axios.get(`${apiUrl}planets/`);
  return response.data;
}




