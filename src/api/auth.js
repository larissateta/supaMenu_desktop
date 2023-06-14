import apiClient from "./client";

const login = async (email, password) => apiClient.post('/auth/login', { email, password });

const signup = async (name, phone, email, password) => apiClient.post('/auth/register', { name, phone, email, password });

const authApi = { login, signup }

export default authApi;
