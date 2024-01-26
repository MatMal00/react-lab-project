import { FC, MouseEvent, ReactElement, useEffect } from "react";
import { UserInfoModal, CommentsModal, AddPhotoModal } from "./components";
import { Portal } from "../Portal";
import { useLockScrollY } from "src/hooks";
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
    AddPhoto: typeof AddPhotoModal;
}

export const Modal: IModalComponent = ({ isOpen, handleClose, children, className }) => {
    const { lock, unlock } = useLockScrollY();

    const handleCloseModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        e.stopPropagation();
        handleClose();
    };

    useEffect(() => {
        if (isOpen) lock();
        if (!isOpen) unlock();
    }, [lock, unlock, isOpen]);

    return (
        <>
            {isOpen && (
                <Portal>
                    <>
                        <div className={styles.modalBackdrop} onClick={handleCloseModal} />
                        <div className={cn(styles.modalContent, className)}>
                            <button className={styles.closeBtn} onClick={handleCloseModal}>
                                <CrossIcon />
                            </button>
                            {children}
                        </div>
                    </>
                </Portal>
            )}
        </>
    );
};

Modal.UserInfo = UserInfoModal;
Modal.Comments = CommentsModal;
Modal.AddPhoto = AddPhotoModal;
