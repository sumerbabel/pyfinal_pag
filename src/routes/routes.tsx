/* eslint-disable react-refresh/only-export-components */
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Reservation from "../pages/reservation/Reservation";
import ReservationConfirmed from "../pages/reservation/ReservationConfirmed";

export default function () {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Reservation />} path="/reservation" />
      <Route element={<ReservationConfirmed />} path="/reservation/ReservationConfirmed" />
    </Routes>
  )
}