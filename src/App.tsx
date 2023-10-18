import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, DefaultLayout, Posts } from "./components";
import { ROUTE } from "./constants";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={DefaultLayout}>
                    <Route path="*" element={<h2>Not Found</h2>} />
                    <Route Component={Home} path={ROUTE.HOME} />
                    <Route Component={Posts} path={ROUTE.POSTS} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
