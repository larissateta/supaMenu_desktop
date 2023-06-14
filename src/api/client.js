import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://supa-menu-backend-7g6a.onrender.com/api',
    timeout: 1000000,
});

export default apiClient;