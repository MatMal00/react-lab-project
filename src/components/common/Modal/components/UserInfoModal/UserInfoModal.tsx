import { FC } from "react";
import styles from "./UserInfoModal.module.scss";
import { useFetchUserDetails } from "src/libs";
import { ActionsHandler } from "src/components/common";
import { IUser } from "src/types";
import { UserDetails } from "./components";

interface IUserInfoModalProps {
    userId: number;
}

export const UserInfoModal: FC<IUserInfoModalProps> = ({ userId }) => {
    const userState = useFetchUserDetails(userId);
    console.log(userState);
    return (
        <div className={styles.userInfoModal}>
            <ActionsHandler<IUser> {...userState}>{(userDetails) => <UserDetails {...userDetails} />}</ActionsHandler>
        </div>
    );
};
