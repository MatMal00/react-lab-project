import { FC } from "react";
import { IPost } from "src/types";
import { PostListItem } from "../PostListItem";
import { Card } from "src/components/common";

interface IPostsListProps {
    posts: IPost[];
    handleRemovePost: (photoId: number) => void;
    userId?: number;
}

export const PostsList: FC<IPostsListProps> = ({ posts, userId, handleRemovePost }) => {
    return (
        <Card.GridContainer>
            {posts.map((post) => (
                <PostListItem
                    {...post}
                    isRemovable={!!(userId && post.userId === userId)}
                    remove={handleRemovePost}
                    key={post.id}
                />
            ))}
        </Card.GridContainer>
    );
};
