import { FC } from "react";
import { IComment } from "src/types";
import { CommentsListItem } from "../CommentsListItem";
import styles from "./CommentsList.module.scss";

interface ICommentsListProps {
    comments: IComment[];
    handleRemoveComment: (commentId: number) => void;
    userId?: number;
}

export const CommentsList: FC<ICommentsListProps> = ({ comments, userId, handleRemoveComment }) => {
    const noOfComments = comments.length;
    const commentsTitle = noOfComments === 1 ? "Comment" : "Comments";

    return (
        <div className={styles.commentsList}>
            <h6 className={styles.title}>
                <b>{noOfComments} </b> {commentsTitle}
            </h6>
            <ul className={styles.list}>
                {comments.map((comment) => (
                    <CommentsListItem
                        key={comment.id}
                        {...comment}
                        isRemovable={!!(userId && comment.userId === userId)}
                        remove={handleRemoveComment}
                    />
                ))}
            </ul>
        </div>
    );
};
