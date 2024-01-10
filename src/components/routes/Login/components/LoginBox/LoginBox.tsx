import { FC } from "react";
import styles from "./LoginBox.module.scss";
import { LoginBoxForm } from "../LoginBoxForm";

export const LoginBox: FC = () => {
    return (
        <div className={styles.box}>
            <h2 className={styles.subTitle}>Sign In</h2>
            <h1 className={styles.title}>- PROJECT -</h1>
            <LoginBoxForm />
        </div>
    );
};
