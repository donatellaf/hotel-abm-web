const axios = require("axios");

const BASE_URL = "http://localhost:8000/api/";

const token = localStorage.getItem("token");

const config = { headers: { authorization: "Bearer " + token } };

export const httpGet = async (url) =>
  axios.get(BASE_URL + url, config).then((response) => {
    return response.data;
  });

export const httpPost = async (url, data) =>
  axios.post(BASE_URL + url, data, config);

export const httpPut = async (url, data) =>
  axios.put(BASE_URL + url, data, config);

export const httpDelete = async (url, id) =>
  axios.delete(BASE_URL + url, config);
