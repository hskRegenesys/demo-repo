import axios from "axios";
import React from "react";

const baseURL = "";
let headers = {};
if (localStorage.token) {
}
export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});
