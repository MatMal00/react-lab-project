import { FC } from "react";
import { Form, Formik } from "formik";
import { Button, FormikInput } from "src/components/common";
import { IPhoto } from "src/types";
import { getRandomNumber } from "src/helpers";
import styles from "./AddPhotoForm.module.scss";

interface IAddPhotoFormProps {
    handleAddPhoto: (newPhoto: IPhoto) => void;
    userId: number;
}

export const AddPhotoForm: FC<IAddPhotoFormProps> = ({ userId, handleAddPhoto }) => {
    return (
        <Formik
            initialValues={{ photoUrl: "", title: "" }}
            onSubmit={({ title, photoUrl }, { resetForm }) => {
                const newPhoto: IPhoto = {
                    albumId: 1,
                    title,
                    url: photoUrl,
                    thumbnailUrl: photoUrl,
                    id: getRandomNumber(1000, 10000),
                    userId: userId,
                };
                handleAddPhoto(newPhoto);
                resetForm();
            }}
        >
            <Form>
                <div className={styles.addPhotoForm}>
                    <FormikInput name="title" label="Title" />
                    <FormikInput name="photoUrl" label="URL" />
                    <Button type="submit" text="Add photo" actionType="add" />
                </div>
            </Form>
        </Formik>
    );
};
