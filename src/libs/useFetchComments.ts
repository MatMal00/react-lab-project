import SWR from "swr";
import { fetcher } from "src/actions";
import { IComment } from "src/types";
import { useCallback } from "react";
import toast from "react-hot-toast";

export const useFetchComments = (postId: number) => {
    const { data, error, isLoading, mutate } = SWR<IComment[], string>(`/posts/${postId}/comments`, fetcher);

    const addComment = useCallback(
        async (newComment: IComment) => {
            try {
                await mutate((comments) => addCommentAction(newComment, comments, postId), {
                    optimisticData: (comments) => [newComment, ...(comments ?? [])],
                    populateCache: true,
                    revalidate: false,
                });
                toast.success("Successfully added the photo");
            } catch {
                toast.error("Failed to add photo");
            }
        },
        [postId, mutate]
    );

    const removeComment = useCallback(
        async (commentId: number) => {
            try {
                await mutate((comments) => removeCommentAction(commentId, comments), {
                    optimisticData: (comments) => (comments ?? []).filter((photo) => photo.id !== commentId),
                    populateCache: true,
                    revalidate: false,
                });
                toast.success("Successfully removed the photo");
            } catch {
                toast.error("Failed to removed photo");
            }
        },
        [mutate]
    );

    return { data, error, isLoading, addComment, removeComment };
};
