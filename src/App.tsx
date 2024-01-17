import { FC } from "react";
import { SWRConfig } from "swr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, DefaultLayout, Posts, Albums, Album, Login, Settings, ProtectedRoute } from "./components";
import { ROUTE } from "./constants";
import { Toaster } from "react-hot-toast";

const App: FC = () => {
    return (
        <>
            <Toaster containerClassName="toaster" />
            <SWRConfig>
                <BrowserRouter>
                    <Routes>
                        <Route element={<DefaultLayout />}>
                            <Route element={<Home />} path={ROUTE.HOME} />
                            <Route element={<Posts />} path={ROUTE.POSTS} />
                            <Route element={<Albums />} path={ROUTE.ALBUMS} />
                            <Route element={<Album />} path={`${ROUTE.ALBUMS}/:albumId`} />
                            <Route element={<Login />} path={ROUTE.LOGIN} />
                            <Route element={<ProtectedRoute />}>
                                <Route element={<Settings />} path={ROUTE.SETTINGS} />
                            </Route>
                            <Route path="*" element={<h2>Not Found</h2>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </SWRConfig>
        </>
    );
};

export default App;
