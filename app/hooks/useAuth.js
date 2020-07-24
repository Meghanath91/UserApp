import { useContext } from "react";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return { user, logOut };
};
