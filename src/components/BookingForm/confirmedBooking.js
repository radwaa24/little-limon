import { Link } from "react-router-dom";

import "./confirmedBooking.css"
export function ConfirmerdBooking() {
  return (
    <div className="container">
      <header className="confirmation-header">
        <div className="text-section">
          <section className="reserve-header-text">
            <h1>Your Reservation is Confirmed!</h1>
            <h4>A confirmation message has been sent to your email.</h4>
            <h4>Thanks for dining with us!</h4>
          </section>
        </div>
        <section className="redirect-buttons">
          <a
            className="redirect-button"
            href={"#Cnfirmation"}
            target="_blank"
            rel="noreferrer">
            Browse Menu
          </a>
          <Link className="redirect-button" to="/order">
            Order Online
          </Link>
          <Link className="redirect-button" to="/">
            Home Page
          </Link>
        </section>
      </header>
    </div>
  );
}
