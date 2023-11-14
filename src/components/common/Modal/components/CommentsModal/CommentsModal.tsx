import { FC } from "react";
import styles from "./CommentsModal.module.scss";

interface ICommentsModalProps {
    userId: number;
}

export const CommentsModal: FC<ICommentsModalProps> = () => {
    return <div className={styles.commentsModal}></div>;
};
