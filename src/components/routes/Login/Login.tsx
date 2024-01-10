import { FC } from "react";
import styles from "./Login.module.scss";
import { LoginBox } from "./components";

export const Login: FC = () => {
    return (
        <section className={styles.login}>
            <LoginBox />
        </section>
    );
};
