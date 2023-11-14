import { FC } from "react";
import { IPost } from "src/types";
import { Avatar } from "src/components/common";
import ManAvatar from "icons/man-avatar.svg?react";
import Comments from "icons/comments.svg?react";
import styles from "./PostListItem.module.scss";

interface IPostListItemProps extends IPost {}

export const PostListItem: FC<IPostListItemProps> = ({ title, body }) => {
    return (
        <li className={styles.item}>
            <div className={styles.topSection}>
                <Avatar className={styles.avatar}>
                    <ManAvatar />
                </Avatar>
                <article className={styles.textBox}>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </article>
            </div>
            <button className={styles.commentsBtn}>
                <Comments />
                <span>comments</span>
            </button>
        </li>
    );
};
