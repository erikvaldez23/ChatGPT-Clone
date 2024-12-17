import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api",
});

export const getChatResponse = async (prompt) => {
    const response = await api.post("/chat", { prompt });
    return response.data.content;
};
