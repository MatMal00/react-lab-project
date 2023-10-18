import SWR from "swr";
import { fetcher } from "src/actions";
import { IPost } from "src/types";

export const useFetchPosts = () => {
    const { data, error, isLoading } = SWR<IPost[], string>("/posts", fetcher);
    return { data, error, isLoading };
};
