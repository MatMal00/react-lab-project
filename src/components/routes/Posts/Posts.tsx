import { FC } from "react";
import { IPost } from "src/types";
import { useAuth, useFetchPosts } from "src/libs";
import { ActionsHandler, ByCurrentUser, Skeleton } from "src/components";
import { AddPostContainer, PostsList } from "./components";
import styles from "./posts.module.scss";
import { AddPhotoForm } from "../Album/components";

export const Posts: FC = () => {
    const { ...postsState } = useFetchPosts();
    const { user } = useAuth();

    return (
        <section className={styles.posts}>
            <ActionsHandler<IPost[]> {...postsState} skeleton={<Skeleton.Post noOfSkeletons={9} />}>
                {(posts) => (
                    <>
                        {user && (
                            <AddPostContainer>
                                <AddPhotoForm userId={user.id} handleAddPhoto={() => {}} />
                            </AddPostContainer>
                        )}
                        <ByCurrentUser<IPost> data={posts} user={user} title="Show my posts">
                            {(filteredPosts) => <PostsList posts={filteredPosts} />}
                        </ByCurrentUser>
                    </>
                )}
            </ActionsHandler>
        </section>
    );
};
