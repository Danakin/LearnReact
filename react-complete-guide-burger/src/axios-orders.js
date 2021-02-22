import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-c5f89-default-rtdb.firebaseio.com",
});

export default instance;
