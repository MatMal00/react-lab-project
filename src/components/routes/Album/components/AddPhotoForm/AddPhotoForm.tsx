import { FC } from "react";
import { Form, Formik } from "formik";
import { Button, FormikInput } from "src/components/common";
import { IPhoto } from "src/types";
import { getRandomNumber } from "src/helpers";
import styles from "./AddPhotoForm.module.scss";

interface IAddPhotoFormProps {
    handleAddPhoto: (newPhoto: IPhoto) => void;
    userId: number;
    albumId?: string;
}

export const AddPhotoForm: FC<IAddPhotoFormProps> = ({ albumId, userId, handleAddPhoto }) => {
    return (
        <Formik
            initialValues={{ photoUrl: "", title: "" }}
            onSubmit={({ title, photoUrl }, { resetForm }) => {
                if (albumId) {
                    const newPhoto: IPhoto = {
                        albumId: +albumId,
                        title,
                        url: photoUrl,
                        thumbnailUrl: photoUrl,
                        id: getRandomNumber(1000, 10000),
                        userId,
                    };
                    handleAddPhoto(newPhoto);
                    resetForm();
                }
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
