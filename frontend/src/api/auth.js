import axios from "axios";

const BASE_URL = "http://localhost:5555";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
