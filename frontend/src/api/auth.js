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

export const logout = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error("Error during sign out:", error.message);
    throw error;
  }
};

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
  }
};
