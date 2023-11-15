import { FC } from "react";
import { IPost } from "src/types";
import { PostListItem } from "../PostListItem";
import styles from "./PostsList.module.scss";

interface IPostsListProps {
    posts: IPost[];
}

export const PostsList: FC<IPostsListProps> = ({ posts }) => {
    return (
        <ul className={styles.list}>
            {posts.map((post) => (
                <PostListItem {...post} key={post.id} />
            ))}
        </ul>
    );
};
