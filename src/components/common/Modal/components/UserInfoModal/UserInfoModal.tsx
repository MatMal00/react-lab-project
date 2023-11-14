import { FC } from "react";
import styles from "./UserInfoModal.module.scss";

interface IUserInfoModalProps {
    userId: number;
}

export const UserInfoModal: FC<IUserInfoModalProps> = () => {
    return <div className={styles.userInfoModal}></div>;
};
