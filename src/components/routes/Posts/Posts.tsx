import { FC } from "react";
import { useFetchPosts } from "src/libs";
import styles from "./posts.module.scss";

export const Posts: FC = () => {
    const { data } = useFetchPosts();

    return (
        <section className={styles.posts}>
            <ul>{data?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
        </section>
    );
};
