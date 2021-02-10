import axios from "axios";


const api = axios.create({
  //baseURL: "https://pedeoferta.com.br/oferta",
  baseURL: "http://192.168.1.68:7001/RestWS2",
});

export default api;