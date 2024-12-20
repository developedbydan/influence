import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getInfluencers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/influencers`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const getPopularInfluencers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/influencers/popular`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const getOneInfluencer = async (influencerId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/influencers/${influencerId}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
    console.log(influencerId);
  }
};

export const bookInfluencer = async (influencerId, details) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/influencers/${influencerId}/book`,
      { details },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const getBookings = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/influencers/bookings`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
  }
};
