import axios from "axios";

const BASE_URL = "http://localhost:5555";

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (email, username, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/signup`,
      {
        email,
        username,
        password,
      },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
