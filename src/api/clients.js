import apiClient from "./client";
import authStorage from "../auth/storage";

const token = authStorage.getToken();

const addClient = async (
  name,
  category,
  representative,
  address,
  email,
  phone,
  bankAccount
) =>
  apiClient.post("/clients/add-new", {
    name,
    category,
    representative,
    address,
    email,
    phone,
    bankAccount,
  }, { headers: { authorization: `Bearer ${token}` }});

const getClient = async (id) => apiClient.get(`/clients/${id}`, {}, { headers: { authorization: `Bearer ${token}` }});

const getAllClients = async () => apiClient.get('/clients', {}, { headers: { authorization: `Bearer ${token}` }});

const clientsApi = {
    addClient,
    getClient,
    getAllClients,
};

export default clientsApi;