import { FC } from "react";
import { useFetchPosts } from "src/libs";
import { ActionsHandler } from "src/components";
import { IPost } from "src/types";
import styles from "./posts.module.scss";

export const Posts: FC = () => {
    const posts = useFetchPosts();

    return (
        <section className={styles.posts}>
            <ActionsHandler<IPost[]> {...posts}>
                {(posts) => (
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                )}
            </ActionsHandler>
        </section>
    );
};
