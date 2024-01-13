import { FC } from "react";
import cn from "classnames";
import styles from "./Hamburger.module.scss";

interface IHamburgerProps {
    handleOpen: () => void;
    isOpen: boolean;
}

export const Hamburger: FC<IHamburgerProps> = ({ handleOpen, isOpen }) => {
    return (
        <div className={styles.hamburger} onClick={handleOpen}>
            <div
                className={cn(styles.hamburgerLine, {
                    [styles.hamburgerLineOpen]: isOpen,
                })}
            />
            <div
                className={cn(styles.hamburgerLine, {
                    [styles.hamburgerLineOpen]: isOpen,
                })}
            />
            <div
                className={cn(styles.hamburgerLine, {
                    [styles.hamburgerLineOpen]: isOpen,
                })}
            />
        </div>
    );
};
