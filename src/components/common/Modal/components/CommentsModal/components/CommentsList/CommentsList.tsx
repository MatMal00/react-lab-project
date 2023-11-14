import { FC } from "react";
import { IComment } from "src/types";
import styles from "./CommentsList.module.scss";
import { CommentsListItem } from "../CommentsListItem";

interface ICommentsListProps {
    comments: IComment[];
}

export const CommentsList: FC<ICommentsListProps> = ({ comments }) => {
    console.log(comments);
    return (
        <div className={styles.commentsList}>
            <h6 className={styles.title}>Comments:</h6>
            <ul className={styles.list}>
                {[...comments, ...comments].map((comment) => (
                    <CommentsListItem {...comment} />
                ))}
            </ul>
        </div>
    );
};
