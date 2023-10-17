import api from "src/api";

export const fetchPosts = async () => await api().get("/posts");
export const fetchPost = async (id: number) => await api().get(`/post/${id}`);
