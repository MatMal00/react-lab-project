import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SWRConfig } from "swr";
import "./styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SWRConfig>
            <App />
        </SWRConfig>
    </React.StrictMode>
);
