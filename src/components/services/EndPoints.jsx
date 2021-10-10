import Axios from "axios";
const BASE_URL = "https://tranquil-taiga-17656.herokuapp.com/home/add-pictures";

const endPoints = {
  getImages: async () => {
    const response = await Axios.get(BASE_URL);
    return response.data;
  },
};

export default endPoints;
