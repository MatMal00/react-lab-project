import { Form, Formik } from "formik";
import { ReactElement } from "react";

interface IByCurrentUserProps<T extends { userId: number }> {
    data: T[];
    userId?: number;
    children: (data: T[]) => ReactElement | ReactElement[];
    enabled: boolean;
}

export const ByCurrentUser = <T extends { userId: number }>({
    data,
    children,
    userId,
    enabled,
}: IByCurrentUserProps<T>) => {
    const filteredData = enabled ? data.filter((item) => item.userId === userId) : data;
    return (
        <Formik initialValues={{ isChecked: false }} onSubmit={() => {}}>
            <Form>
                <div></div>
                <>{children(filteredData)}</>
            </Form>
        </Formik>
    );
};
