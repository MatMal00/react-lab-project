import { FC } from "react";
import { useFetchUserDetails } from "src/libs";
import { ActionsHandler } from "src/components/common";
import { UserDetails, UserDetailsSkeleton } from "./components";
import { IUser } from "src/types";
import styles from "./UserInfoModal.module.scss";

interface IUserInfoModalProps {
    userId: number;
}

export const UserInfoModal: FC<IUserInfoModalProps> = ({ userId }) => {
    const userState = useFetchUserDetails(userId);

    return (
        <div className={styles.userInfoModal}>
            <ActionsHandler<IUser> {...userState} skeleton={<UserDetailsSkeleton />}>
                {(userDetails) => <UserDetails {...userDetails} />}
            </ActionsHandler>
        </div>
    );
};
