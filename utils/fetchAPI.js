import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "f68a98e652msh2a11f695707008cp1bcfc4jsne5b85992e274",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
