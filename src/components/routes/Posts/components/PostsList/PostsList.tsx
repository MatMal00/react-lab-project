import { FC } from "react";
import { IPost } from "src/types";
import styles from "./PostsList.module.scss";
import { PostListItem } from "../PostListItem";

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
