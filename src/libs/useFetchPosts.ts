import SWR from "swr";
import { fetchPosts } from "src/actions";

export const useFetchPosts = () => {
    const { data, ...rest } = SWR("/api/posts", fetchPosts);

    return { ...rest, posts: data };
};
