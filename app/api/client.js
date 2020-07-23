import { create } from "apisauce";
//change this constant to local machine's IP_address and desired port
const IP_ADDRESS_DEVELOPMENT_SERVER = "192.168.2.23";
const PORT = 9000;

const apiClient = create({
  baseURL: `http://${IP_ADDRESS_DEVELOPMENT_SERVER}:${PORT}/api`,
});
export default apiClient;
