import axios from "axios";


const api = axios.create({
  baseURL: "https://pedeoferta.com.br/oferta",
});

export default api;