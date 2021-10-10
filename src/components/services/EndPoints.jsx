import Axios from "axios";
const BASE_URL = "https://afrinana-back.herokuapp.com/";

const endPoints = {
  login: async (data) => {
    const response = await Axios.post(BASE_URL + "auth/login", data);
    // const response = await fetch({});
    return response.data;
  },

  signup: async (data) => {
    const response = await Axios.post(BASE_URL + "auth/signup", data);
    return response.data;
  },

  getImages: async () => {
    const response = await Axios.get(BASE_URL + "images");
    return response.data;
  },

  uploadImgs: async (data) => {
    const response = await Axios.post(BASE_URL + "uploadimages");
    return response.data;
  },
};

export default endPoints;
