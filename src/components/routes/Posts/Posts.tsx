import { FC } from "react";
import { IPost } from "src/types";
// import { useFetchPosts } from "src/libs";
// import { ActionsHandler } from "src/components";
import { PostsList } from "./components";
import styles from "./posts.module.scss";

const dummyData: IPost[] = [
    {
        title: "Title1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias eveniet rerum nihil amet animi iusto. Nemo illo rerum similique magnam sequi. Ipsum velit facilis dicta praesentium perspiciatis, tempore quam?",
        id: 1,
        userId: 2,
    },
    {
        title: "Title1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias eveniet rerum nihil amet animi iusto. Nemo illo rerum similique magnam sequi. Ipsum velit facilis dicta praesentium perspiciatis, tempore quam?",
        id: 2,
        userId: 1,
    },
    {
        title: "Title1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias eveniet rerum nihil amet animi iusto. Nemo illo rerum similique magnam sequi. Ipsum velit facilis dicta praesentium perspiciatis, tempore quam?",
        id: 3,
        userId: 1,
    },
    {
        title: "Title1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias eveniet rerum nihil amet animi iusto. Nemo illo rerum similique magnam sequi. Ipsum velit facilis dicta praesentium perspiciatis, tempore quam?",
        id: 4,
        userId: 1,
    },
    {
        title: "Title1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias eveniet rerum nihil amet animi iusto. Nemo illo rerum similique magnam sequi. Ipsum velit facilis dicta praesentium perspiciatis, tempore quam?",
        id: 5,
        userId: 1,
    },
];

export const Posts: FC = () => {
    // const postsState = useFetchPosts();

    return (
        <section className={styles.posts}>
            {/* <ActionsHandler<IPost[]> {...postsState}>{(posts) => <PostsList posts={posts} />}</ActionsHandler> */}
            <PostsList posts={dummyData} />
        </section>
    );
};
