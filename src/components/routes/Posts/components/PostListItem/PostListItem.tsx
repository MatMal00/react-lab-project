import { FC } from "react";
import { IPost } from "src/types";
import ManAvatar from "src/images/man-avatar.svg?react";
import styles from "./PostListItem.module.scss";

interface IPostListItemProps extends IPost {}

export const PostListItem: FC<IPostListItemProps> = ({ title, body }) => {
    return (
        <li className={styles.item}>
            <div className={styles.contentContainer}>
                <div className={styles.avatarBox}>
                    <ManAvatar />
                </div>
                <article className={styles.textBox}>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </article>
            </div>
            <button>comments</button>
        </li>
    );
};
