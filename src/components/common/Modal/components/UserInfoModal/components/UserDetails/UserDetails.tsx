import { FC } from "react";
import { IUser } from "src/types";
import { Avatar } from "src/components/common";
import ManAvatarIcon from "icons/man-avatar.svg?react";
import styles from "./UserDetails.module.scss";

interface IUserDetailsProps extends IUser {}

export const UserDetails: FC<IUserDetailsProps> = ({
    username,
    name,
    email,
    company: { name: companyName },
    address: { city },
}) => {
    return (
        <div className={styles.userDetails}>
            <article className={styles.headingContainer}>
                <Avatar className={styles.avatar}>
                    <ManAvatarIcon />
                </Avatar>
                <h2> {username}</h2>
            </article>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Personal informations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>name:</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>email:</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>company:</td>
                        <td>{companyName}</td>
                    </tr>
                    <tr>
                        <td>city:</td>
                        <td>{city}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
