import { FC } from "react";
import { Card, FormikInput } from "src/components";
import { Form, Formik } from "formik";
import { useFetchAllUsers } from "src/libs";
import { UsersList } from "./UsersList";
import cn from "classnames";
import styles from "./UsersListCard.module.scss";

interface IUsersListCardProps {
    className: string;
}

export const UsersListCard: FC<IUsersListCardProps> = ({ className }) => {
    const { data } = useFetchAllUsers();

    return (
        <Card className={cn(styles.card, className)}>
            <Card.Body>
                <Formik initialValues={{ search: "" }} onSubmit={() => {}} enableReinitialize>
                    {({ values: { search } }) => {
                        const filteredUsers = data?.filter(({ name }) =>
                            name.toLowerCase().includes(search.toLowerCase())
                        );

                        return (
                            <>
                                <Form className={styles.form}>
                                    <FormikInput name="search" label="Search" />
                                </Form>
                                <UsersList users={filteredUsers} />
                            </>
                        );
                    }}
                </Formik>
            </Card.Body>
        </Card>
    );
};
