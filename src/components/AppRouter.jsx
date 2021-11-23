import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((r) => (
        <Route key={r.path} path={r.path} element={r.Component} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
