import { FC } from "react";
import { AddPhotoForm } from "../AddPhotoForm";
import styles from "./AddPhoto.module.scss";

interface IAddPhotoProps {
    userId: number;
}

export const AddPhoto: FC<IAddPhotoProps> = ({ userId }) => {
    return (
        <div className={styles.addPhoto}>
            <h2>As logged in customer you can manage your photos</h2>
            <AddPhotoForm userId={userId} />
        </div>
    );
};
