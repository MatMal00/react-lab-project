import { FC } from "react";
import { useFetchComments } from "src/libs";
import { ActionsHandler } from "src/components";
import { IComment } from "src/types";
import { CommentsList, CommentsListSkeleton } from "./components";
import styles from "./CommentsModal.module.scss";

interface ICommentsModalProps {
    postTitle: string;
    postId: number;
}

export const CommentsModal: FC<ICommentsModalProps> = ({ postTitle, postId }) => {
    const commentsState = useFetchComments(postId);

    return (
        <div className={styles.commentsModal}>
            <h5 className={styles.title}>{postTitle}</h5>

            <ActionsHandler<IComment[]> {...commentsState} skeleton={<CommentsListSkeleton />}>
                {(comments) => <CommentsList comments={comments} />}
            </ActionsHandler>
        </div>
    );
};
