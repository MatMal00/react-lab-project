import { FC } from "react";
import { Button } from "src/components/common";
import styles from "./Home.module.scss";

export const Home: FC = () => {
  return (
    <main className={styles.home}>
      <h1>Home page</h1>
      <Button>Click me</Button>
    </main>
  );
};
