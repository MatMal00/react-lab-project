import { FC } from "react";
import { IComment } from "src/types";
import styles from "./CommentsList.module.scss";
import { CommentsListItem } from "../CommentsListItem";

interface ICommentsListProps {
    comments: IComment[];
}

export const CommentsList: FC<ICommentsListProps> = ({ comments }) => {
    const noOfComments = comments.length;
    const commentsTitle = noOfComments === 1 ? "Comment" : "Comments";

    return (
        <div className={styles.commentsList}>
            <h6 className={styles.title}>
                <b>{noOfComments} </b> {commentsTitle}
            </h6>
            <ul className={styles.list}>
                {comments.map((comment) => (
                    <CommentsListItem key={comment.id} {...comment} />
                ))}
            </ul>
        </div>
    );
};
