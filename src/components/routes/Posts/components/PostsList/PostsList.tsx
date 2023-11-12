import { FC } from "react";
import { IPost } from "src/types";
import { ReactComponent as ManAvatar } from "src/images/man-avatar.svg";
import styles from "./PostsList.module.scss";

interface IPostsListProps {
    posts: IPost[];
}

export const PostsList: FC<IPostsListProps> = ({ posts }) => {
    return (
        <ul className={styles.list}>
            {posts.map(({ id, title, body }) => (
                <li className={styles.item} key={id}>
                    <div className={styles.contentContainer}>
                        <div>
                            <ManAvatar />
                        </div>
                        <article>
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </article>
                    </div>
                    <button>comments</button>
                </li>
            ))}
        </ul>
    );
};
