import { FC } from "react";
import { useFetchUserDetails } from "src/libs";
import { ActionsHandler, Skeleton } from "src/components/common";
import { UserDetails } from "./components";
import { IUser } from "src/types";
import styles from "./UserInfoModal.module.scss";

interface IUserInfoModalProps {
    userId: number;
}

export const UserInfoModal: FC<IUserInfoModalProps> = ({ userId }) => {
    const userState = useFetchUserDetails(userId);

    return (
        <div className={styles.userInfoModal}>
            <ActionsHandler<IUser> {...userState} skeleton={<Skeleton.UserDetails />}>
                {(userDetails) => <UserDetails {...userDetails} />}
            </ActionsHandler>
        </div>
    );
};
