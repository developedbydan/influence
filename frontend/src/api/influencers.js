import axios from "axios";

const BASE_URL = "http://localhost:5555";

export const getInfluencers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/influencers`);
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const bookInfluencer = async (influencerId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/influencers/${influencerId}/book`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
  }
};
