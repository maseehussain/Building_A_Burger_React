import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://react-masee-burger.firebaseio.com/"
});
