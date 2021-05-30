import axios from "axios";

const url = "https://graduation-project-backend.herokuapp.com/api/v1/product";

export const getProductList = () => {
    return axios.get(url);
};
