import { useState, FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginBoxForm.module.scss";
import { useFetchAuth } from "src/libs";

export const LoginBoxForm: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useFetchAuth();

    const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            const response = await login({ email, password });
            console.log(response);
            navigate("/", { replace: true });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className={styles.form}>
            <label htmlFor="email" className={styles.label}>
                Email:
            </label>
            <input
                type="email"
                id="email"
                className={styles.input}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className={styles.label}>
                Password:
            </label>
            <input
                type="password"
                id="password"
                className={styles.input}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className={styles.btnWrapper}>
                <button type="submit" className={styles.button} onClick={handleLogin}>
                    Login
                </button>
            </div>
        </form>
    );
};
