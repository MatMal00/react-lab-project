import { FC } from "react";
import styles from "./AddPhoto.module.scss";
import { Button } from "src/components/common";

interface IAddPhotoProps {}

export const AddPhoto: FC<IAddPhotoProps> = () => {
    return (
        <div className={styles.addPhoto}>
            <h2>As logged in customer you can manage your photos</h2>
            <Button text="Add photo" actionType="add" />
        </div>
    );
};
