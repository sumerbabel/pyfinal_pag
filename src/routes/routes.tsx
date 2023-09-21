/* eslint-disable react-refresh/only-export-components */
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function () {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  )
}