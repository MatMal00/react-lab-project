import { FC } from "react";
import { IUser } from "src/types";
import styles from "./UsersList.module.scss";

interface IUsersListProps {
    users?: IUser[];
}

export const UsersList: FC<IUsersListProps> = ({ users }) => {
    return (
        <ul className={styles.usersList}>
            {!users?.length ? (
                <p>No results</p>
            ) : (
                users.map(({ name, username, email, phone, id }, index) => (
                    <li key={id}>
                        <table>
                            <thead>
                                <tr>
                                    <th align="center" colSpan={2}>
                                        User No. {index + 1}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td>Username:</td>
                                    <td>{username}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>{phone}</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                ))
            )}
        </ul>
    );
};
