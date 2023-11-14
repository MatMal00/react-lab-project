import { FC, ReactElement } from "react";
import cn from "classnames";
import styles from "./Avatar.module.scss";

interface IAvatarProps {
    children: ReactElement;
    className?: string;
}

export const Avatar: FC<IAvatarProps> = ({ children, className }) => {
    return <div className={cn(styles.avatar, className)}>{children}</div>;
};
