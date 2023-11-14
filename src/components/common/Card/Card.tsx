import { FC, ReactElement } from "react";
import { CardBody, CardFooter, CardHeading } from "./components";
import cn from "classnames";
import styles from "./Card.module.scss";

interface ICardProps {
    children: ReactElement | ReactElement[];
    className?: string;
    theme?: "primary" | "seconday";
}

interface ICardComponent extends FC<ICardProps> {
    Heading: typeof CardHeading;
    Body: typeof CardBody;
    Footer: typeof CardFooter;
}

export const Card: ICardComponent = ({ className, children, theme = "primary" }) => {
    return (
        <div
            className={cn(styles.card, className, {
                [styles.cardSeconday]: theme === "seconday",
            })}
        >
            {children}
        </div>
    );
};

Card.Heading = CardHeading;
Card.Body = CardBody;
Card.Footer = CardFooter;
