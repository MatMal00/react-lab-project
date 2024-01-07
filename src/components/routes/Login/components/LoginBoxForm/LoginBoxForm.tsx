import { useState, FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginBoxForm.module.scss";
import { useFetchAuth } from "src/libs";
import Cookies from "js-cookie";

interface FormErrors {
    email?: string;
    password?: string;
}

export const LoginBoxForm: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const { login } = useFetchAuth();
    console.log(errors);

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

    const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const response = await login({ email, password });

            Cookies.set("AuthorizationToken", response.authorizationToken);

            navigate("/", { replace: true });
            window.location.reload(); //to fix
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
