import axios from "axios";

const API_URL = "http://localhost:3000";

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    localStorage.setItem("token", response.data);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

export async function signUp(name: string, email: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      name,
      email,
      password,
    });
    localStorage.setItem("user", response.data);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
