import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "src/components/common";

interface IDefaultLayoutProps {}

export const DefaultLayout: FC<IDefaultLayoutProps> = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
