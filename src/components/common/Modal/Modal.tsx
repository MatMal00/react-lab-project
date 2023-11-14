import { FC, MouseEvent, ReactElement } from "react";
import { UserInfoModal, CommentsModal } from "./components";
import { Portal } from "../Portal";
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

Modal.UserInfo = UserInfoModal;
Modal.Comments = CommentsModal;
