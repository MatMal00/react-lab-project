import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components";
import "./App.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
