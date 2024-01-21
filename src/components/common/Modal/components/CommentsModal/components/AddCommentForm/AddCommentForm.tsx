import { FC } from "react";
import { Form, Formik } from "formik";
import { Button, FormikInput } from "src/components/common";
import { IComment, IUser } from "src/types";
import { getRandomNumber } from "src/helpers";
import styles from "./AddCommentForm.module.scss";

interface IAddCommentFormProps {
    handleAddComment: (newComment: IComment) => void;
    user: IUser;
    postId: number;
}

export const AddCommentForm: FC<IAddCommentFormProps> = ({ user, handleAddComment, postId }) => {
    return (
        <Formik
            initialValues={{ comment: "" }}
            onSubmit={({ comment }, { resetForm }) => {
                const newComment: IComment = {
                    postId: postId,
                    id: getRandomNumber(1000, 10000),
                    userId: user.id,
                    body: comment,
                    email: user.email,
                    name: "no name",
                };
                handleAddComment(newComment);
                resetForm();
            }}
        >
            <Form>
                <div className={styles.addCommentForm}>
                    <FormikInput name="comment" label="Comment" />
                    <Button type="submit" text="Add comment" actionType="add" />
                </div>
            </Form>
        </Formik>
    );
};
