import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Courses from "./pages/Courses/Сourses";
import AppLayout from "./pages/AppLayout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route path="courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
