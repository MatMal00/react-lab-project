import { FC } from "react";
import { IPost } from "src/types";

interface IPostsListProps {
    posts: IPost[];
}

export const PostsList: FC<IPostsListProps> = ({ posts }) => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};
