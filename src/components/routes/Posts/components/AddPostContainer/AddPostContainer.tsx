import { FC, ReactNode } from "react";
import styles from "./AddPostContainer.module.scss";

interface IAddPostContainerProps {
    children?: ReactNode;
}

export const AddPostContainer: FC<IAddPostContainerProps> = ({ children }) => {
    return (
        <div className={styles.addPostContainer}>
            <h2>As logged in customer you can manage your posts</h2>
            {children}
        </div>
    );
};
