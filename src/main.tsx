import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Courses from "./pages/Courses/Сourses";
import AppLayout from "./pages/AppLayout";
import Help from "./pages/Help/Help";
import { Enter } from "./components/Enter/Enter";
import Likes from "./pages/Likes/Likes";
import Help_Ready from "./pages/Help-Ready/Help-Ready";

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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
