import { FC } from "react";
import { useFetchPosts } from "src/libs";
import { ActionsHandler } from "src/components";
import styles from "./posts.module.scss";

export const Posts: FC = () => {
    const { posts, isLoading, error } = useFetchPosts();

    return (
        <section className={styles.posts}>
            <ActionsHandler isLoading={isLoading} error={error}>
                <ul>{posts?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
            </ActionsHandler>
        </section>
    );
};
