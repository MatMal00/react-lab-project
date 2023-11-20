import { FC } from "react";
import { PostSkeleton } from "./PostSkeleton";
import { CommentSkeleton } from "./CommentSkeleton";
import { UserDetailsSkeleton } from "./UserDetailsSkeleton";
import { AlbumSkeleton } from "./AlbumSkeleton";

interface ISkeletonProps {}

interface ISkeletonElement extends FC<ISkeletonProps> {
    Post: typeof PostSkeleton;
    Comment: typeof CommentSkeleton;
    UserDetails: typeof UserDetailsSkeleton;
    Album: typeof AlbumSkeleton;
}

export const Skeleton: ISkeletonElement = () => {
    return null;
};

Skeleton.Post = PostSkeleton;
Skeleton.Comment = CommentSkeleton;
Skeleton.UserDetails = UserDetailsSkeleton;
Skeleton.Album = AlbumSkeleton;
