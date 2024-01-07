import { FC } from "react";
import styles from "./LoginBoxForm.module.scss";

export const LoginBoxForm: FC = () => {
    return (
        <form className={styles.form}>
            <label htmlFor="email" className={styles.label}>
                Email:
            </label>
            <input type="email" id="email" className={styles.input} required />

            <label htmlFor="password" className={styles.label}>
                Password:
            </label>
            <input type="password" id="password" className={styles.input} required />

            <div className={styles.btnWrapper}>
                <button type="submit" className={styles.button}>
                    Login
                </button>
            </div>
        </form>
    );
};
