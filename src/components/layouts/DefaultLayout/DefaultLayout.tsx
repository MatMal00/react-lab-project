import { FC, ReactNode } from "react";

interface IDefaultLayoutProps {
    children: ReactNode | ReactNode[];
}

export const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <nav></nav>
            <main>{children}</main>
            <footer></footer>
        </>
    );
};
