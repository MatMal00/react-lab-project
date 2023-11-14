import { FC, ReactElement } from "react";
import cn from "classnames";
import styles from "./CardBody.module.scss";

interface ICardBodyProps {
    children: ReactElement | ReactElement[];
    className?: string;
}

export const CardBody: FC<ICardBodyProps> = ({ children, className }) => {
    return <div className={cn(styles.body, className)}>{children}</div>;
};
