import { FC } from "react";
import styles from "./CommentsModal.module.scss";
import { useFetchComments } from "src/libs";
import { ActionsHandler } from "src/components/common/ActionsHandler";
import { IComment } from "src/types";

interface ICommentsModalProps {
    postId: number;
}

export const CommentsModal: FC<ICommentsModalProps> = ({ postId }) => {
    const comments = useFetchComments(postId);
    console.log(comments);
    return (
        <div className={styles.commentsModal}>
            <ActionsHandler<IComment[]> {...comments}>{() => <div></div>}</ActionsHandler>
        </div>
    );
};
