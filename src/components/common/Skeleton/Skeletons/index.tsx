import { FC, ReactElement, Fragment } from "react";
import { PostSkeleton } from "./PostSkeleton";

interface ISkeletonProps {
    noOfSkeletons: number;
    children?: ReactElement;
}

interface ISkeletonElement extends FC<ISkeletonProps> {
    Post: typeof PostSkeleton;
}

export const Skeleton: ISkeletonElement = ({ noOfSkeletons = 1, children }) => {
    const skeletonArray = Array.from({ length: noOfSkeletons }, (_, index) => (
        <Fragment key={index}>{children}</Fragment>
    ));

    return <>{skeletonArray}</>;
};

Skeleton.Post = PostSkeleton;
