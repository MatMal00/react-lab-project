import { FC } from "react";
import { useAuth, useFetchComments } from "src/libs";
import { ActionsHandler, Skeleton } from "src/components";
import { IComment } from "src/types";
import { AddCommentForm, CommentsList } from "./components";
import styles from "./CommentsModal.module.scss";

interface ICommentsModalProps {
    postTitle: string;
    postId: number;
}

export const CommentsModal: FC<ICommentsModalProps> = ({ postTitle, postId }) => {
    const { addComment, removeComment, ...commentsState } = useFetchComments(postId);
    const { user } = useAuth();

    return (
        <div className={styles.commentsModal}>
            <h5 className={styles.title}>{postTitle}</h5>

            <ActionsHandler<IComment[]> {...commentsState} skeleton={<Skeleton.Comment noOfSkeletons={3} />}>
                {(comments) => (
                    <>
                        <CommentsList comments={comments} userId={user?.id} handleRemoveComment={removeComment} />
                        {user && <AddCommentForm handleAddComment={addComment} user={user} postId={postId} />}
                    </>
                )}
            </ActionsHandler>
        </div>
    );
};
