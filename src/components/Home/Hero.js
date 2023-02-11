import { Link } from "react-router-dom";
import food from "../images/Home/Hero/restauranfood.jpg";
import "../style/hero.css" ;

export function Hero()  {
  return (
    <div className="Hero">
      <div className="Hero_description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        you can find the most delicious food with a suitable prices, order your favorite dish or catch your table <span style={{fontWeight: "bold" , color: "yellow"}}> NOW</span> 
        </p>
        <Link to="/Reservation" aria-label="Reservation">
          <button className="button_Y">Reserve a Table</button>
        </Link>
      </div>
      <div className="Rest_img">
        <img src={food} alt="restaurant" />
      </div>
    </div>
  );
};
