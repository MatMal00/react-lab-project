import { FC } from "react";
import { IPost } from "src/types";
import { useAuth, useFetchPosts } from "src/libs";
import { ActionsHandler, ByCurrentUser, Skeleton } from "src/components";
import { AddPostContainer, AddPostForm, PostsList } from "./components";
import styles from "./posts.module.scss";

export const Posts: FC = () => {
    const { addPost, removePost, ...postsState } = useFetchPosts();
    const { user } = useAuth();

    return (
        <section className={styles.posts}>
            <ActionsHandler<IPost[]> {...postsState} skeleton={<Skeleton.Post noOfSkeletons={9} />}>
                {(posts) => (
                    <>
                        {user && (
                            <AddPostContainer>
                                <AddPostForm userId={user.id} handleAddPost={(newPost) => addPost(newPost)} />
                            </AddPostContainer>
                        )}
                        <ByCurrentUser<IPost> data={posts} user={user} title="Show my posts">
                            {(filteredPosts) => (
                                <PostsList userId={user?.id} posts={filteredPosts} handleRemovePost={removePost} />
                            )}
                        </ByCurrentUser>
                    </>
                )}
            </ActionsHandler>
        </section>
    );
};
