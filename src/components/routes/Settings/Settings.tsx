import { FC } from "react";
import { Avatar, Button, Card, FormikInput } from "src/components";
import ManAvatarIcon from "icons/man-avatar.svg?react";
import styles from "./Settings.module.scss";
import { Form, Formik } from "formik";
import { useAuth } from "src/libs";

interface ISettingsProps {}

export const Settings: FC<ISettingsProps> = () => {
    const { user: { name, username, email, phone, website } = {} } = useAuth();

    return (
        <section className={styles.settings}>
            <Card className={styles.card}>
                <Card.Body>
                    <Avatar className={styles.avatar}>
                        <ManAvatarIcon />
                    </Avatar>
                    <Formik initialValues={{ name, username, email, phone, website }} onSubmit={() => {}}>
                        <Form className={styles.form}>
                            <FormikInput name="email" label="Email" />
                            <FormikInput name="name" label="Name" />
                            <FormikInput name="phone" label="Phone" />
                            <FormikInput name="username" label="Username" />
                            <FormikInput name="website" label="Website" />
                            <Button type="submit" text="Edit" actionType="edit" />
                        </Form>
                    </Formik>
                </Card.Body>
            </Card>
        </section>
    );
};
