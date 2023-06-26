import axios from 'axios';
import {exame} from "./requests/exame"

// const accessToken = JSON.parse(sessionStorage.getItem('okta-token-storage'));

// const token = accessToken ? `${accessToken.accessToken.accessToken}` : '';

const api = axios.create({
  baseURL: 'https://649884589543ce0f49e21cfa.mockapi.io',
//   headers: {
//     'Authorization': `${!token ? "" : "Bearer " + token}`,
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   }
})

export const requests = {
  ...exame(api)
}

export default api;