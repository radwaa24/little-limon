import { useState, } from "react";

import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

import "./bookingform.css";

export function BookingForm(props) {
  const navigate = useNavigate();

  const [date,setDate]=useState(new Date().toISOString().slice(0,10))   
   function handleDateChange(e) {
     setDate(e.target.value);
      const date = new Date(e.target.value).toISOString().slice(0, 10);
     props.updateTimes(date);
     }
 const formik = useFormik({
   initialValues: { guest: "", Occasion: "", date:date, time: "" },
   onSubmit: (values, helper) => {
     navigate("/Confirmation");
     props.submit(values);
     console.log(values);
     helper.resetForm();
   },
   validationSchema: Yup.object({
     guest: Yup.number()
       .min(1, "must be at least 1 guest")
       .required("Tell us number of guest"),
     Occasion: Yup.string().nullable().required("Tell us the Occasion"),
     date: Yup.string().required("Choose Date "),
     time: Yup.string().nullable().required("Choose Time"),
   }),
    
 });
  return (
    <div className="banner">
      <h2>BOOK YOUR TABLE NOW</h2>
      <div className="card-container">
        <div className="card-img"></div>
        <div className="card-content">
          <h3>Reservation</h3>
           
          <form onSubmit={formik.handleSubmit}>
            <div className="form-row">
              <div
                
                className="number-input-container">
                
                <label htmlFor="date"></label>
                <input
                  id="date"
                  name="date"
                  type="Date"
                  value={date}
                  onChange={handleDateChange}
                  required
                />
                {formik.errors.date ? <p>* {formik.errors.date}</p> : null}
              </div>
              <div className="number-input-container">
                <label htmlFor="time"></label>
                <select
                  id="time"
                  onChange={formik.handleChange}
                  value={formik.values.time}
                  name="time"
                  required>
                  {props.AvailableTimes.map((times) => (
                    <option key={times} value={times}>
                      {times}
                    </option>
                  ))}
                </select>
                {formik.errors.time ? <p>* {formik.errors.time}</p> : null}
              </div>
            </div>
            <div className="form-row">
              <div className="number-input-container">
                <label htmlFor="guest"></label>
                <input
                  id="guest"
                  value={formik.values.guest}
                  onChange={formik.handleChange}
                  name="guest"
                  type="number"
                  placeholder="Guests"
                  min="1"
                  max="10"
                />
                {formik.errors.guest ? <p>* {formik.errors.guest}</p> : null}
              </div>
              <div className="number-input-container">
                <label htmlFor="occasion"></label>
                <select
                  id="occassion"
                  onChange={formik.handleChange}
                  value={formik.values.Occasion}
                  name="Occasion"
                  required>
                  <option value="hour-select">Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
                {formik.errors.Occasion ? (
                  <p>* {formik.errors.Occasion}</p>
                ) : null}
              </div>
            </div>
            <div className="form-row">
              <input
                aria-label="Confirmation onClick"
                type="submit"
                value="BOOK TABLE"
                disabled={!formik.isValid}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
