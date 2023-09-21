/* eslint-disable react-refresh/only-export-components */
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Default from "../pages/Default";

export default function () {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Default />} path="/default" />
      
    </Routes>
  )
}