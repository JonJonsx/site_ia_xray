import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8282/", //no modelo antigo é necessário /auth/
 realm: "AIXrayBackend",
 clientId: "login-app",
});

export default keycloak;