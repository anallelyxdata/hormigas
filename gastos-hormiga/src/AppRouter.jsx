import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, CategoryPage, DatavizPage, QRPage, FormPage } from "./pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/quiz" element={<HomePage />} />
        <Route path="/quiz/questions" element={<CategoryPage />} />
        <Route path="/quiz/dataviz" element={<DatavizPage />} />
        <Route path="/quiz/form" element={<FormPage />} />
        <Route path="/quiz/qr" element={<QRPage />} />
      </Routes>
    </>
  );
};
