import { FC, ReactElement } from "react";
import cn from "classnames";
import styles from "./CardHeading.module.scss";

interface ICardHeadingProps {
    children: ReactElement | ReactElement[];
    className?: string;
}

export const CardHeading: FC<ICardHeadingProps> = ({ className, children }) => {
    return <article className={cn(styles.heading, className)}>{children}</article>;
};
