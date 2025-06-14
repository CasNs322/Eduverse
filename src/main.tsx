import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Figma from "./pages/Theme/Figma/First/Figma";
import AppLayout from "./pages/AppLayout";
import Help from "./pages/Help/Help";
import { Enter } from "./components/Enter/Enter";
import Likes from "./pages/Likes/Likes";
import Help_Ready from "./pages/Help-Ready/Help-Ready";
import Courses from "./pages/Courses/Courses";
import Years from "./pages/Years/Years";
import Direction from "./pages/Direction/Direction";
import Figma_second from "./pages/Theme/Figma/Second/Second";
import Figma_third from "./pages/Theme/Figma/third/third";
import Figma_fourth from "./pages/Theme/Figma/fourth/fourth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route path="courses" element={<Courses />} />
          <Route path="help" element={<Help />} />
          <Route path="enter" element={<Enter />} />
          <Route path="likes" element={<Likes />} />
          <Route path="help-ready" element={<Help_Ready />} />
          <Route path="figma" element={<Figma />} />
          <Route path="years" element={<Years />} />
          <Route path="direction" element={<Direction />} />
          <Route path="figma_second" element={<Figma_second />} />
          <Route path="figma_third" element={<Figma_third />} />
          <Route path="figma_fourth" element={<Figma_fourth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
