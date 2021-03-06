//api layer is handled by apisauce lib
import { create } from "apisauce";
import authStorage from "../auth/storage";
//change this constant to local machine's IP_address and desired port
const IP_ADDRESS_DEVELOPMENT_SERVER = "192.168.2.23";
const PORT = 9000;

//configure api client
const apiClient = create({
  baseURL: `http://${IP_ADDRESS_DEVELOPMENT_SERVER}:${PORT}/api`,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return; //if no authToken exit
  request.headers["x-auth-token"] = authToken;
});
export default apiClient;
