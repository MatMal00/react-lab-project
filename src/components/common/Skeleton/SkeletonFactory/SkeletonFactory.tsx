import { CSSProperties, FC } from "react";
import styles from "./SkeletonFactory.module.scss";

interface ISkeletonElementProps {
    width: CSSProperties["width"];
    height: CSSProperties["height"];
}

interface ISkeletonFactoryProps {}

interface ISkeletonFactoryElement extends FC<ISkeletonFactoryProps> {
    ContentArea: typeof ContentAreaSkeleton;
    Avatar: typeof AvatarSkeleton;
    Title: typeof TitleSkeleton;
}

export const SkeletonFactory: ISkeletonFactoryElement = () => {
    return null;
};

const AvatarSkeleton: FC<ISkeletonElementProps> = ({ width, height }) => (
    <div style={{ width, height }} className={styles.avatarSkeleton}></div>
);
const TitleSkeleton: FC<ISkeletonElementProps> = ({ width, height }) => (
    <div style={{ width, height }} className={styles.titleSkeleton}></div>
);
const ContentAreaSkeleton: FC<ISkeletonElementProps> = ({ width, height }) => (
    <div style={{ width, height }} className={styles.contentAreaSkeleton}></div>
);

SkeletonFactory.Avatar = AvatarSkeleton;
SkeletonFactory.Title = TitleSkeleton;
SkeletonFactory.ContentArea = ContentAreaSkeleton;
