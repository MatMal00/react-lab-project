import { FC } from "react";
import { Form, Formik } from "formik";
import { Button, FormikInput } from "src/components/common";
import { IPost } from "src/types";
import { getRandomNumber } from "src/helpers";
import styles from "./AddPostForm.module.scss";

interface IAddPostFormProps {
    handleAddPost: (newPhoto: IPost) => void;
    userId: number;
    albumId?: string;
}

export const AddPostForm: FC<IAddPostFormProps> = ({ albumId, userId, handleAddPost }) => {
    return (
        <Formik
            initialValues={{ body: "", title: "" }}
            onSubmit={({ title, body }, { resetForm }) => {
                if (albumId) {
                    const newPost: IPost = {
                        title,
                        body,
                        id: getRandomNumber(1000, 10000),
                        userId,
                    };
                    handleAddPost(newPost);
                    resetForm();
                }
            }}
        >
            <Form>
                <div className={styles.addPostForm}>
                    <FormikInput name="title" label="Title" />
                    <FormikInput name="body" label="Description" />
                    <Button type="submit" text="Add post" actionType="add" />
                </div>
            </Form>
        </Formik>
    );
};
