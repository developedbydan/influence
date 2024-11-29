import axios from "axios";

const BASE_URL = "http://localhost:5555";

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

export const bookInfluencer = async (influencerId, details) => {
  try {
    const response = await axios.get(
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
