import { FC } from "react";
import { IComment } from "src/types";
import { CommentsListItem } from "../CommentsListItem";
import { Skeleton } from "src/components/common";
import { SkeletonFactory } from "src/components/common/Skeleton/SkeletonFactory";
import cn from "classnames";
import styles from "./CommentsList.module.scss";

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

export const CommentsListSkeleton = () => {
    return (
        <div className={styles.commentsList}>
            <SkeletonFactory.Title width={"100%"} height={"27px"} />
            <ul className={cn(styles.list, styles.listSkeleton)}>
                <Skeleton noOfSkeletons={3}>
                    <Skeleton.Comment />
                </Skeleton>
            </ul>
        </div>
    );
};
