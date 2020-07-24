import { useContext } from "react"; //to handle global props
import jwtDecode from "jwt-decode"; //to handle jwt

import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

//custom hook to manage auth
export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  //to implement login set user and store auth
  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };
  //to implement logout set user to null and remove authtoken
  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return { user, logIn, logOut };
};
