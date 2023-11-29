import axios from 'axios';
import {exame} from "./requests/exame"
import {grafico} from "./requests/grafico"
import { useKeycloak } from "@react-keycloak/web";

// const accessToken = JSON.parse(sessionStorage.getItem('okta-token-storage'));

// const token = accessToken ? `${accessToken.accessToken.accessToken}` : '';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    // 'Authorization': `${"Bearer " + keycloak.token}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }
})

// api.interceptors.request.use(config => {

//   const { keycloak, initialized } = useKeycloak();

//   if (keycloak.authenticated) {
//     config.headers.Authorization = `Bearer ${keycloak.token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

export const requests = {
  ...exame(api),
  ...grafico(api)
}

export default api;