/* eslint-disable react-refresh/only-export-components */
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Reservation from "../pages/reservation/Reservation";

export default function () {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Reservation />} path="/reservation" />
      
    </Routes>
  )
}