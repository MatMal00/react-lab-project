import { FC } from "react";
import { IPost } from "src/types";
import { useFetchPosts } from "src/libs";
import { ActionsHandler, Skeleton } from "src/components";
import { PostsList } from "./components";
import styles from "./posts.module.scss";

export const Posts: FC = () => {
    const postsState = useFetchPosts();

    return (
        <section className={styles.posts}>
            <ActionsHandler<IPost[]> {...postsState} skeleton={<Skeleton.Post noOfSkeletons={9} />}>
                {(posts) => <PostsList posts={posts} />}
            </ActionsHandler>
        </section>
    );
};
