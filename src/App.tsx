import { FC } from "react";
import { SWRConfig } from "swr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, DefaultLayout, Posts, Albums, Album, Login } from "./components";
import { ROUTE } from "./constants";
import { Toaster } from "react-hot-toast";

const App: FC = () => {
    return (
        <>
            <Toaster containerClassName="toaster" />
            <SWRConfig>
                <BrowserRouter>
                    <Routes>
                        <Route Component={DefaultLayout}>
                            <Route Component={Home} path={ROUTE.HOME} />
                            <Route Component={Posts} path={ROUTE.POSTS} />
                            <Route Component={Albums} path={ROUTE.ALBUMS} />
                            <Route Component={Login} path={ROUTE.LOGIN} />
                            <Route Component={Album} path={`${ROUTE.ALBUMS}/:albumId`} />
                            <Route path="*" element={<h2>Not Found</h2>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </SWRConfig>
        </>
    );
};

export default App;
