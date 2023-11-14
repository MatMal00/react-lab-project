import { FC } from "react";
import { Card } from "src/components/common";
import { SkeletonFactory } from "../../SkeletonFactory";

interface ICommentSkeletonProps {}

export const CommentSkeleton: FC<ICommentSkeletonProps> = () => {
    return (
        <Card>
            <Card.Body>
                <SkeletonFactory.Title width={"100%"} height={"27px"} />
                <SkeletonFactory.ContentArea width={"100%"} height={"80px"} />
            </Card.Body>
        </Card>
    );
};
