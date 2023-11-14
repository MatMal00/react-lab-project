import { CSSProperties, FC } from "react";
import styles from "./Skeleton.module.scss";

interface ISkeletonProps {}
interface ISkeletionElementProps {
    width: CSSProperties["width"];
    height: CSSProperties["height"];
}

interface ISkeletonComponent extends FC<ISkeletonProps> {
    ContentArea: typeof ContentAreaSkeleton;
    Avatar: typeof AvatarSkeleton;
    Title: typeof TitleSkeleton;
}

export const Skeleton: ISkeletonComponent = () => {
    return null;
};

const AvatarSkeleton: FC<ISkeletionElementProps> = ({ width, height }) => (
    <div style={{ width, height }} className={styles.avatarSkeleton}></div>
);
const TitleSkeleton: FC<ISkeletionElementProps> = ({ width, height }) => (
    <div style={{ width, height }} className={styles.titleSkeleton}></div>
);
const ContentAreaSkeleton: FC<ISkeletionElementProps> = ({ width, height }) => (
    <div style={{ width, height }} className={styles.contentAreaSkeleton}></div>
);

Skeleton.Avatar = AvatarSkeleton;
Skeleton.Title = TitleSkeleton;
Skeleton.ContentArea = ContentAreaSkeleton;
