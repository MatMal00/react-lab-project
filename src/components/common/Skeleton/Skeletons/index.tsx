import { FC } from "react";
import { PostSkeleton } from "./PostSkeleton";
import { CommentSkeleton } from "./CommentSkeleton";
import { UserDetailsSkeleton } from "./UserDetailsSkeleton";

interface ISkeletonProps {}

interface ISkeletonElement extends FC<ISkeletonProps> {
    Post: typeof PostSkeleton;
    Comment: typeof CommentSkeleton;
    UserDetails: typeof UserDetailsSkeleton;
}

export const Skeleton: ISkeletonElement = () => {
    return null;
};

Skeleton.Post = PostSkeleton;
Skeleton.Comment = CommentSkeleton;
Skeleton.UserDetails = UserDetailsSkeleton;
