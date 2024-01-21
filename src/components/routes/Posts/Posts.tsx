import { FC } from "react";
import { IPost } from "src/types";
import { useAuth, useFetchPosts } from "src/libs";
import { ActionsHandler, ByCurrentUser, Skeleton } from "src/components";
import { PostsList } from "./components";
import styles from "./posts.module.scss";

export const Posts: FC = () => {
    const postsState = useFetchPosts();
    const { user } = useAuth();

    return (
        <section className={styles.posts}>
            <ActionsHandler<IPost[]> {...postsState} skeleton={<Skeleton.Post noOfSkeletons={9} />}>
                {(posts) => (
                    <ByCurrentUser<IPost> enabled data={posts} userId={user?.id}>
                        {(filteredPosts) => <PostsList posts={filteredPosts} />}
                    </ByCurrentUser>
                )}
            </ActionsHandler>
        </section>
    );
};
