import SWR from "swr";
import { fetchPosts } from "src/actions";

export const useFetchPosts = () => SWR("/api/posts", fetchPosts);
