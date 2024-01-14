import { FC, ReactNode } from "react";
import styles from "./AddPhotoContainer.module.scss";

interface IAddPhotoContainerProps {
    children?: ReactNode;
}

export const AddPhotoContainer: FC<IAddPhotoContainerProps> = ({ children }) => {
    return (
        <div className={styles.addPhotoContainer}>
            <h2>As logged in customer you can manage your photos</h2>
            {children}
        </div>
    );
};
