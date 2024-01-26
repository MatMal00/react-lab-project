import { FC } from "react";
import { useAuth } from "src/libs";
import { Form, Formik, FormikErrors } from "formik";
import { FormikInput } from "src/components";
import styles from "./LoginBoxForm.module.scss";
import toast from "react-hot-toast";

interface FormErrors {
    email?: string;
    password?: string;
}

export const LoginBoxForm: FC = () => {
    const { login, isLoading } = useAuth();

    const validateForm = (
        email: string,
        password: string,
        setErrors: (
            errors: FormikErrors<{
                email: string;
                password: string;
            }>
        ) => void
    ) => {
        const newErrors: FormErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
            toast.error("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email address is invalid";
            toast.error("Email address is invalid");
        }

        if (!password) {
            newErrors.password = "Password is required";
            toast.error("Password is required");
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            toast.error("Password must be at least 6 characters");
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={({ email, password }, { setErrors }) => {
                if (!validateForm(email, password, setErrors)) return;
                return login(email);
            }}
        >
            <>
                <Form className={styles.form}>
                    <FormikInput disabled={isLoading} type="email" name="email" label="Email:" />
                    <FormikInput disabled={isLoading} type="password" name="password" label="Password" />

                    <div className={styles.btnWrapper}>
                        <button disabled={isLoading} type="submit" className={styles.button}>
                            Login
                        </button>
                    </div>
                </Form>
            </>
        </Formik>
    );
};
