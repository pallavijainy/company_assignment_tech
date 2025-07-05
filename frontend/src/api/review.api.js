import axios from "axios";

export const backendConfig = {
  base: "http://10.176.221.250:3000/api",
  origin: "http://10.176.221.250:3000/", 
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