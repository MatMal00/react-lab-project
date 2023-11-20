import { FC, ReactElement } from "react";
import cn from "classnames";
import styles from "./CardGridContainer.module.scss";

interface ICardGridContainerProps {
    children: ReactElement[] | ReactElement;
    className?: string;
}

export const CardGridContainer: FC<ICardGridContainerProps> = ({ children, className }) => (
    <ul className={cn(styles.cardGridContainer, className)}>{children}</ul>
);
