import { FC, MouseEvent, ReactElement } from "react";
import styles from "./Modal.module.scss";

interface IModalProps {
    isOpen: boolean;
    handleClose: () => void;
    children: ReactElement | ReactElement[];
}

export const Modal: FC<IModalProps> = ({ isOpen, handleClose, children }) => {
    const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        handleClose();
    };

    return (
        <>
            {isOpen && (
                <div className={styles.modal} onClick={handleCloseModal}>
                    <div className={styles.modalContent}>{children}</div>
                </div>
            )}
        </>
    );
};
