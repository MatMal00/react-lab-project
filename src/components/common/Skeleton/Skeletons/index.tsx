import { FC, ReactElement, Fragment, useEffect } from "react";
import { PostSkeleton } from "./PostSkeleton";
import { useLockScrollY } from "src/hooks";
import { CommentSkeleton } from "./CommentSkeleton";
import { UserDetailsSkeleton } from "./UserDetailsSkeleton";

interface ISkeletonProps {
    noOfSkeletons: number;
    children: ReactElement;
}

interface ISkeletonElement extends FC<ISkeletonProps> {
    Post: typeof PostSkeleton;
    Comment: typeof CommentSkeleton;
    UserDetails: typeof UserDetailsSkeleton;
}

export const Skeleton: ISkeletonElement = ({ noOfSkeletons = 1, children }) => {
    const { lock, unlock } = useLockScrollY();

    const skeletonArray = Array.from({ length: noOfSkeletons }, (_, index) => (
        <Fragment key={index}>{children}</Fragment>
    ));

    useEffect(() => {
        lock();
        return () => unlock();
    }, [lock, unlock]);

    return <>{skeletonArray}</>;
};

Skeleton.Post = PostSkeleton;
Skeleton.Comment = CommentSkeleton;
Skeleton.UserDetails = UserDetailsSkeleton;
