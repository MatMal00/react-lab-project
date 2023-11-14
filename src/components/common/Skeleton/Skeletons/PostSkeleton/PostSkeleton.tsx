import { FC } from "react";
import { Card } from "src/components/common";
import { SkeletonFactory } from "../../SkeletonFactory";
// import styles from "./PostSkeleton.module.scss";

interface IPostSkeletonProps {}

export const PostSkeleton: FC<IPostSkeletonProps> = () => {
    return (
        <Card>
            <Card.Body>
                <SkeletonFactory.Avatar width={"70px"} height={"70px"} />
                <SkeletonFactory.Title width={"100%"} height={"27px"} />
                <SkeletonFactory.ContentArea width={"100%"} height={"80px"} />
            </Card.Body>
        </Card>
    );
};
