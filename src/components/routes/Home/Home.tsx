import { FC } from "react";
import { HeroSection } from "./components";
import styles from "./Home.module.scss";

export const Home: FC = () => {
    return (
        <main className={styles.home}>
            <div className={styles.backgroundImage}>
                <HeroSection />
            </div>
        </main>
    );
};
