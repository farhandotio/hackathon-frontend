// src/data/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://hackathon-backend-mocha.vercel.app/",
});

// http://localhost:3000

export default API;
