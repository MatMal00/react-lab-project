import { FC } from "react";
import styles from "./Home.module.scss";
import { useFetchPosts } from "src/libs";

export const Home: FC = () => {
    const { data } = useFetchPosts();

    return (
        <main className={styles.home}>
            <ul>{data?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
        </main>
    );
};
