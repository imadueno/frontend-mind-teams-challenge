import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

/**
 * retornamos el auth context en una sola importación
 * @returns auth context
 */
const useAuth = () => useContext(AuthContext);
export default useAuth;
