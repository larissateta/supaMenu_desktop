import apiClient from "./client";
import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

const token = authStorage.getToken();

const addRestaurant = async (
  name,
  phone,
  ownerphone,
  ownerName,
  ownerEmail,
) =>
  apiClient.post("/restaurants/add-new", {
    name,
    phone,
    ownerphone,
    ownerName,
    ownerEmail,
    createdBy: jwtDecode(token)
  }, { headers: { authorization: `Bearer ${token}` }});

const getRestaurant = async (id) => apiClient.get(`/clients/${id}`, {}, { headers: { authorization: `Bearer ${token}` }});

const getAllRestaurants = async () => apiClient.get('/clients', {}, { headers: { authorization: `Bearer ${token}` }});

const restaurantApi = {
    addRestaurant,
    getRestaurant,
    getAllRestaurants,
};

export default restaurantApi;