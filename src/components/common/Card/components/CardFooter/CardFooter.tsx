import { FC, ReactElement } from "react";
import cn from "classnames";
import styles from "./CardFooter.module.scss";

interface ICardFooterProps {
    children: ReactElement | ReactElement[];
    className?: string;
}

export const CardFooter: FC<ICardFooterProps> = ({ className, children }) => {
    return <div className={cn(styles.footer, className)}>{children}</div>;
};
