import { FC } from "react";
import { IPost } from "src/types";
import { Avatar, Card } from "src/components";
import ManAvatarIcon from "icons/man-avatar.svg?react";
import CommentsIcon from "icons/comments.svg?react";
import styles from "./PostListItem.module.scss";

interface IPostListItemProps extends IPost {}

export const PostListItem: FC<IPostListItemProps> = ({ title, body }) => {
    return (
        <li>
            <Card className={styles.card}>
                <Card.Body>
                    <Avatar className={styles.avatar} onClick={() => {}}>
                        <ManAvatarIcon />
                    </Avatar>
                    <article className={styles.textBox}>
                        <h5>{title}</h5>
                        <p>{body}</p>
                    </article>
                </Card.Body>
                <Card.Footer>
                    <button className={styles.commentsBtn} onClick={() => {}}>
                        <CommentsIcon />
                        <span>comments</span>
                    </button>
                </Card.Footer>
            </Card>
        </li>
    );
};
