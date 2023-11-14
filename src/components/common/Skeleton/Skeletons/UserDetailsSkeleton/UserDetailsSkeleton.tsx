import { FC } from "react";
import { SkeletonFactory } from "../../SkeletonFactory";
import styles from "./UserDetailsSkeleton.module.scss";

interface IUserDetailsSkeletonProps {}

export const UserDetailsSkeleton: FC<IUserDetailsSkeletonProps> = () => {
    return (
        <>
            <div className={styles.title}>
                <SkeletonFactory.Avatar width={"52px"} height={"52px"} inlineStyles={{ minWidth: "52px" }} />
                <SkeletonFactory.Title width={"100%"} height={"27px"} />
            </div>
            <SkeletonFactory.Title width={"100%"} height={"27px"} inlineStyles={{ paddingBottom: "20px" }} />
            <SkeletonFactory.ContentArea width={"100%"} height={"80px"} />
        </>
    );
};
