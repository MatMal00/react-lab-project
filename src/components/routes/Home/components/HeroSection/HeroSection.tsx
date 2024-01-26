import { FC } from "react";
import styles from "./HeroSection.module.scss";

export const HeroSection: FC = () => {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.heroHeader}>PROJECT</h1>
            <p className={styles.heroDesc}>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
    );
};
