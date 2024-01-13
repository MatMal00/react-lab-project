import { FC, useState } from "react";
import { Button, Modal } from "src/components/common";
import styles from "./AddPhoto.module.scss";

interface IAddPhotoProps {
    userId: number;
}

export const AddPhoto: FC<IAddPhotoProps> = ({ userId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSetIsOpen = () => setIsOpen((prev) => !prev);

    return (
        <div className={styles.addPhoto}>
            <h2>As logged in customer you can manage your photos</h2>
            <Button onClick={handleSetIsOpen} text="Add photo" actionType="add" />

            <Modal handleClose={handleSetIsOpen} isOpen={isOpen}>
                <Modal.AddPhoto userId={userId} />
            </Modal>
        </div>
    );
};
