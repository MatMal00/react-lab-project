import { FC } from "react";
import styles from "./Home.module.scss";

export const Home: FC = () => {
    return (
        <main className={styles.home}>
            <div className={styles.homeBg}></div>
        </main>
    );
};
