import { FC } from "react";
import { Card } from "src/components";
import { SkeletonFactory } from "../../SkeletonFactory";
import styles from "./AlbumSkeleton.module.scss";

interface IAlbumSkeletonProps {
    noOfSkeletons?: number;
}

export const AlbumSkeleton: FC<IAlbumSkeletonProps> = ({ noOfSkeletons = 1 }) => {
    return (
        <Card.GridContainer>
            <SkeletonFactory noOfSkeletons={noOfSkeletons}>
                <Card className={styles.albumSkeleton}>
                    <Card.Heading>
                        <SkeletonFactory.Title width={"100%"} height={"30px"} />
                        <SkeletonFactory.ContentArea width={"100%"} height={"250px"} />
                    </Card.Heading>
                </Card>
            </SkeletonFactory>
        </Card.GridContainer>
    );
};
