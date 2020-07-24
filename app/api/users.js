// const addUser = (users) => {
//   const data = new FormData();
//   data.append("name", user.email);
//   data.append("price", user.password);
//   data.append("location", user.location);

//   user.images.forEach((image, index) =>
//     data.append("images", {
//       name: "image" + index,
//       type: "image/jpeg",
//       uri: image,
//     })
//   );

//   return client.post(users, data);
// };

// export default {
//   addUser,
// };
import client from "./client";
const register = (userInfo) => client.post("/users", userInfo);
export default { register };
