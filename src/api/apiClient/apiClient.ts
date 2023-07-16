import axios from "axios";
import { apiUrl } from "./apiEndpoints";

const apiClient = axios.create({ baseURL: apiUrl });

export default apiClient;
