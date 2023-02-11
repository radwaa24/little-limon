import { useState,useEffect } from "react";
import {Home} from"./Home";
import { Route,Routes } from "react-router-dom";
import {Menu} from "./Menu";
import {Order} from "./order";
import {Login} from "./login";
import { CircleLoader } from "react-spinners";
import { ConfirmerdBooking } from "./BookingForm/confirmedBooking";
import {Reservation} from "./Reservation"; 

import "../App.css"
import { About } from "./Home/About";


export function Router() {
let [loading, setLoading] = useState(true);
useEffect(() => {
  setLoading(false);
}, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <CircleLoader loading={loading} color="#495e57" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Confirmation" element={<ConfirmerdBooking />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}
// 

export default Router ;