import { FC } from "react";
import { Button } from "src/components/common";
import { Form, Formik } from "formik";
import styles from "./AddPhoto.module.scss";

interface IAddPhotoProps {
    userId: number;
}

export const AddPhoto: FC<IAddPhotoProps> = ({ userId }) => {
    return (
        <div className={styles.addPhoto}>
            <h2>As logged in customer you can manage your photos</h2>
            <Formik
                initialValues={{}}
                onSubmit={() => {
                    console.log(userId);
                }}
            >
                <Form>
                    <Button type="submit" text="Add photo" actionType="add" />
                </Form>
            </Formik>
        </div>
    );
};
