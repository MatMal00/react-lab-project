import { FC } from "react";
import { Avatar, Button, Card, FormikInput } from "src/components";
import ManAvatarIcon from "icons/man-avatar.svg?react";
import styles from "./Settings.module.scss";
import { Form, Formik } from "formik";
import { useAuth } from "src/libs";

interface ISettingsProps {}

export const Settings: FC<ISettingsProps> = () => {
    const { user: { name, username, email, phone, website } = {}, updateUserData } = useAuth();

    return (
        <section className={styles.settings}>
            <Card className={styles.card}>
                <Card.Body>
                    <Avatar className={styles.avatar}>
                        <ManAvatarIcon />
                    </Avatar>
                    <Formik
                        initialValues={{ name, username, email, phone, website }}
                        onSubmit={(updatedData) => updateUserData(updatedData)}
                        enableReinitialize
                    >
                        {({ isSubmitting }) => (
                            <Form className={styles.form}>
                                <FormikInput disabled={isSubmitting} name="email" label="Email" />
                                <FormikInput disabled={isSubmitting} name="name" label="Name" />
                                <FormikInput disabled={isSubmitting} name="phone" label="Phone" />
                                <FormikInput disabled={isSubmitting} name="username" label="Username" />
                                <FormikInput disabled={isSubmitting} name="website" label="Website" />
                                <Button disabled={isSubmitting} type="submit" text="Edit" actionType="edit" />
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </section>
    );
};
