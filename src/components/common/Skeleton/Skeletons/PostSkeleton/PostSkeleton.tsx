import { FC } from "react";
import { Card } from "src/components/common";
import { SkeletonFactory } from "../../SkeletonFactory";

interface IPostSkeletonProps {
    noOfSkeletons?: number;
}

export const PostSkeleton: FC<IPostSkeletonProps> = ({ noOfSkeletons = 1 }) => {
    return (
        <Card.GridContainer>
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
        </Card.GridContainer>
    );
};
