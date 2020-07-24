//authentication api layer
import client from "./client";

//handling login with inputs as email and password
const login = (email, password) => client.post("/auth", { email, password });

export default {
  login,
};
