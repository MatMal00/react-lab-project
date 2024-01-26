import { FC } from "react";
import styles from "./Home.module.scss";
import { HeroSection } from "./components/HeroSection";

export const Home: FC = () => {
    return (
        <main className={styles.home}>
            <div className={styles.backgroundImage}>
                <HeroSection />
            </div>
        </main>
    );
};
