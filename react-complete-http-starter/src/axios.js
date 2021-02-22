import axios from "axios";

const instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// instance.interceptors.request.use(...) // Example for instance interceptor

export default instance;
