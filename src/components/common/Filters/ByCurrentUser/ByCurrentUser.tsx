import { IUser } from "src/types";
import { Form, Formik } from "formik";
import { ReactElement } from "react";
import { FormikCheckbox } from "../../Formik";

interface IByCurrentUserProps<T extends { userId?: number }> {
    data: T[];
    user?: IUser;
    children: (data: T[]) => ReactElement | ReactElement[];
    title: string;
}

export const ByCurrentUser = <T extends { userId?: number }>({
    data,
    children,
    user,
    title,
}: IByCurrentUserProps<T>) => {
    if (user) {
        return (
            <Formik initialValues={{ isChecked: false }} onSubmit={() => {}}>
                {({ values: { isChecked } }) => {
                    const filteredData = isChecked ? data.filter((item) => item.userId === user.id) : data;

                    return (
                        <Form>
                            <FormikCheckbox name="isChecked" label={title} />
                            {children(filteredData)}
                        </Form>
                    );
                }}
            </Formik>
        );
    } else {
        return <>{children(data)}</>;
    }
};
