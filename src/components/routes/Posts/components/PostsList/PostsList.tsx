import { FC } from "react";
import { IPost } from "src/types";
import { PostListItem } from "../PostListItem";
import { Card } from "src/components/common";

interface IPostsListProps {
    posts: IPost[];
}

export const PostsList: FC<IPostsListProps> = ({ posts }) => {
    return (
        <Card.GridContainer>
            {posts.map((post) => (
                <PostListItem {...post} key={post.id} />
            ))}
        </Card.GridContainer>
    );
};
