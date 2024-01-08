import { useState, FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginBoxForm.module.scss";
import { useFetchAuth, useFetchAllUsers } from "src/libs";

interface FormErrors {
    email?: string;
    password?: string;
}

export const LoginBoxForm: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, setErrors] = useState({});

    const navigate = useNavigate();

    const userState = useFetchAllUsers();

    const { login } = useFetchAuth();

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email address is invalid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        const response = login({ email, userState });

        if (response) {
            window.localStorage.setItem("user", JSON.stringify(response));

            navigate("/", { replace: true });
            window.location.reload(); //to fix
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
