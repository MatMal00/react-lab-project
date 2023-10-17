import api from "src/api";

export const fetchComments = async () => api().get("/comments");
