import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, DefaultLayout } from "./components";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={DefaultLayout}>
                    <Route Component={Home} path="/" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
