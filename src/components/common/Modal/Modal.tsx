import { FC, MouseEvent, ReactElement } from "react";
import { UserInfoModal, CommentsModal } from "./components";
import { Portal } from "../Portal";
import CrossIcon from "icons/cross.svg?react";
import cn from "classnames";
import styles from "./Modal.module.scss";

interface IModalProps {
    isOpen: boolean;
    handleClose: () => void;
    children: ReactElement | ReactElement[];
    className?: string;
}

interface IModalComponent extends FC<IModalProps> {
    UserInfo: typeof UserInfoModal;
    Comments: typeof CommentsModal;
}

export const Modal: IModalComponent = ({ isOpen, handleClose, children, className }) => {
    const handleCloseModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        e.stopPropagation();
        handleClose();
    };

    return (
        <>
            {isOpen && (
                <Portal>
                    <div className={styles.modal} onClick={handleCloseModal}>
                        <div className={cn(styles.modalContent, className)}>
                            <button className={styles.closeBtn} onClick={handleCloseModal}>
                                <CrossIcon />
                            </button>
                            {children}
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};

Modal.UserInfo = UserInfoModal;
Modal.Comments = CommentsModal;
