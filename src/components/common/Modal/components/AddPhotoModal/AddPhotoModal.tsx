import { FC } from "react";
import styles from "./AddPhotoModal.module.scss";

interface IAddPhotoModalProps {
    userId: number;
}

export const AddPhotoModal: FC<IAddPhotoModalProps> = () => {
    return (
        <div className={styles.AddPhotoModal}>
            <form action=""></form>
        </div>
    );
};
