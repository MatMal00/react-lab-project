import { FC } from "react";
import { Card } from "src/components/common";
import { SkeletonFactory } from "../../SkeletonFactory";
import styles from "./CommentSkeleton.module.scss";

interface ICommentSkeletonProps {
    noOfSkeletons?: number;
}

export const CommentSkeleton: FC<ICommentSkeletonProps> = ({ noOfSkeletons = 1 }) => {
    return (
        <div className={styles.commentsList}>
            <SkeletonFactory.Title width={"100%"} height={"27px"} />
            <ul className={styles.list}>
                <SkeletonFactory noOfSkeletons={noOfSkeletons}>
                    <Card>
                        <Card.Body>
                            <SkeletonFactory.Title width={"100%"} height={"27px"} />
                            <SkeletonFactory.ContentArea width={"100%"} height={"80px"} />
                        </Card.Body>
                    </Card>
                </SkeletonFactory>
            </ul>
        </div>
    );
};
