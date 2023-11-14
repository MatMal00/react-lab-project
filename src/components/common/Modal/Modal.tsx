import { FC, MouseEvent, ReactElement } from "react";
import { Portal } from "../Portal";
import cn from "classnames";
import styles from "./Modal.module.scss";

interface IModalProps {
    isOpen: boolean;
    handleClose: () => void;
    children: ReactElement | ReactElement[];
    className?: string;
}

export const Modal: FC<IModalProps> = ({ isOpen, handleClose, children, className }) => {
    const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        handleClose();
    };

    return (
        <>
            {isOpen && (
                <Portal>
                    <div className={styles.modal} onClick={handleCloseModal}>
                        <div className={cn(styles.modalContent, className)}>{children}</div>
                    </div>
                </Portal>
            )}
        </>
    );
};
