import SWR from "swr";
import { fetchPosts } from "src/actions";

export const useFetchPosts = () => {
    const { data, error, isLoading } = SWR("/api/posts", fetchPosts);
    return { data, error, isLoading };
};
