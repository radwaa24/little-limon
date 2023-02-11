import { Link } from "react-router-dom";
import salad from "../images/Home/specials/greek salad.jpg";
import bruch from "../images/Home//specials/bruchetta.svg";
import dessert from "../images/Home//specials/lemon dessert.jpg";
import "../style/Highlights.css";

const specials = [
  { name: "Greek salad", price: 12.99, description: "The famous greek salad of crispy littuce,peppers,olives and our Chicago style feta cheese.granished with crunchy garlic and rosemany croutons ", image: salad },
  { name: "Bruchetta", price: 5.99, description: "Our Burchetta is made from grilled bread that has been smeared with garlic ans sessoned with salt and olive oil", image: bruch },
  { name: "Lemon Dessert", price: 5.00, description: "This comos straigt from grandma's recipe book.every last ingredient has been sourced and is a authentic as can be imagined", image: dessert },
];
export function Highlights() {
  return (
    <div className="Highlights">
      <div className="title_spec">
        <h4>This weeks specials!</h4>
        <Link to="/Menu" aria-label="Menu">
          <button className="button_Y">Online Menu</button>
        </Link>
      </div>
      <div className="specials-Card">
        {specials.map((special, index) => {
          return (
            <div key={index} className="Card-container">
              <div className="Card-img">
                <img src={special.image} alt={special.name} />
              </div>
              <div className="Card-text">
                <div className="Card-product">
                  <h5 className="Card-title">{special.name}</h5>
                  <div className="Card-price">$ {special.price}</div>
                </div>
                <p className="Card-description">{special.description}</p>
                <div className="Card-plus">Order a delevery</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Highlights;