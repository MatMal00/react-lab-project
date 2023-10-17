import api from "src/api";
import { httpStatus } from "src/helpers";
import { IPost } from "src/types";

export const fetchPosts = async () => {
    try {
        const reponse = await api().get<IPost[]>("/posts");

        const status = httpStatus(reponse.status);
        if (status !== "success") throw new Error(status);

        return reponse.data;
    } catch (error) {
        console.error(error);
    }
};
export const fetchPost = async (id: number) => await api().get(`/post/${id}`);
