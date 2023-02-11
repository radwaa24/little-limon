import {useReducer} from "react";

import {Header} from "./Header";
import {Footer} from "./Footer";
import { BookingForm } from "./BookingForm/bookingform";
import { fetchAPI,submitAPI } from "../API";

export const updateTimes = (date) => {
  return fetchAPI(date);
};
export const initializeTimes = fetchAPI(new Date());


export function Reservation() {
  const [AvailableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  function submitForm(formData) {
    return submitAPI(formData)
    }
    
  return (
    <div className="container">
      <Header />
      <BookingForm AvailableTimes={AvailableTimes} updateTimes={dispatch} submit={submitForm} />
      <Footer />
    </div>
  );
}
