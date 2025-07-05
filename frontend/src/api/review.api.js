import axios from "axios";

export const backendConfig = {
  base: "https://pallavi-code-backend-4.onrender.com/api",
  origin: "https://pallavi-code-backend-4.onrender.com/", 
};

const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
});


export async function getReview() {
  try {
    const response = await Axios.get('/review/landing-reviews');
    return response?.data;
  } catch (error) {
    return error?.response.data;
  }
}