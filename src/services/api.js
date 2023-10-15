import axios from 'axios';
import {exame} from "./requests/exame"
import {grafico} from "./requests/grafico"

// const accessToken = JSON.parse(sessionStorage.getItem('okta-token-storage'));

// const token = accessToken ? `${accessToken.accessToken.accessToken}` : '';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    // 'Authorization': `${!token ? "" : "Bearer " + token}`,
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }
})

export const requests = {
  ...exame(api),
  ...grafico(api)
}

export default api;