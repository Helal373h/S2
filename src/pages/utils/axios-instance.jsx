import axios from 'axios';

const api = axios.create({
  // استخدام بروكسي وسيط لتجاوز قيود CORS والوصول للسيرفر
  baseURL: "https://corsproxy.io/?https://white-seahorse-266682.hostingsite.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;