import SWR from "swr";
import { fetcher } from "src/actions";
import { IComment } from "src/types";

export const useFetchComments = (postId: string) => {
    const { data, error, isLoading } = SWR<IComment[], string>(`/posts/${postId}/comments`, fetcher);
    return { data, error, isLoading };
};
