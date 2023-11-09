import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
    const { keycloak, initialized } = useKeycloak();
    console.log(keycloak)
    return keycloak.authenticated ? children : 
    <div className="hover:text-gray-200">
                    {!keycloak.authenticated && (
                    <button
                        type="button"
                        className="text-blue-800"
                        onClick={() => keycloak.login()}
                    >
                        Você não possui acesso, clique aqui para logar.
                    </button>
                    )}
    </div>
};

export default PrivateRoute;