import { FC } from "react";
import { Form, Formik } from "formik";
import { Button, FormikInput } from "src/components/common";
import styles from "./AddPhotoForm.module.scss";

interface IAddPhotoFormProps {
    userId: number;
}

export const AddPhotoForm: FC<IAddPhotoFormProps> = ({ userId }) => {
    return (
        <Formik
            initialValues={{ photoUrl: "" }}
            onSubmit={() => {
                console.log(userId);
            }}
        >
            <Form>
                <div className={styles.addPhotoForm}>
                    <FormikInput name="photoUrl" label="URL" />
                    <Button type="submit" text="Add photo" actionType="add" />
                </div>
            </Form>
        </Formik>
    );
};
