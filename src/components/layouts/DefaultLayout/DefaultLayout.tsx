import { FC, ReactNode } from "react";
import { Footer, Navbar } from "src/components/common";

interface IDefaultLayoutProps {
    children: ReactNode | ReactNode[];
}

export const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};
