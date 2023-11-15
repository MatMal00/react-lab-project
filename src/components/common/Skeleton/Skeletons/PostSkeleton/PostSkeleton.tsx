import { FC } from "react";
import { Card } from "src/components/common";
import { SkeletonFactory } from "../../SkeletonFactory";
import styles from "./PostSkeleton.module.scss";

interface IPostSkeletonProps {
    noOfSkeletons?: number;
}

export const PostSkeleton: FC<IPostSkeletonProps> = ({ noOfSkeletons = 1 }) => {
    return (
        <ul className={styles.postListSkeleton}>
            <SkeletonFactory noOfSkeletons={noOfSkeletons}>
                <Card>
                    <Card.Body>
                        <SkeletonFactory.Avatar width={"70px"} height={"70px"} inlineStyles={{ alignSelf: "center" }} />
                        <SkeletonFactory.Title width={"100%"} height={"27px"} />
                        <SkeletonFactory.ContentArea width={"100%"} height={"80px"} />
                        <SkeletonFactory.Title width={"100%"} height={"27px"} />
                    </Card.Body>
                </Card>
            </SkeletonFactory>
        </ul>
    );
};
