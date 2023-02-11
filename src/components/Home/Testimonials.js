import "../style/testimonials.css"
import profile from "../images/Home/Testo/profile-photo.jpg"
export function Testimonials() {
  const testi = [
    {
      name: "Adrian",
      photo: profile,
      Rating: 5,
      Review:
        "This restaurant is amazing! the stuff are very nice and warm people, the food delishes!",
      id: 1,
      item:<span>&#9733;</span>
    },
    {
      name: "Mario",
      photo: profile,
      Rating: 2,
      Review:
        "The cheesey bread will fill your heart with love! very recommended.",
      id: "2",
      item:<span>&#9733;</span>
    },
    {
      name: "Messi",
      photo: profile,
      Rating: 1,
      Review:
        "Ordered the salad and pasta Margarita, best pasta in the whole country!",
      id: "3",
      item:"&#9733"
    },
  ];
  return (
    <div  className="testimo">
      <div className="title_test">
        <h1>Testimonials</h1>
      </div>

      <div className="Clients">
        {testi.map((x, index) => {
          return (
            <div key={index} className="Card-profile">
              <div className="Ratting">
                {Array(x.Rating)
                  .fill()
                  .map((_,i) => (
                    <span key={i}>&#9733;</span>
                  ))}
              </div>
              <div className="profile">
                <div className="photo">
                  <img src={x.photo} alt={x.name} />
                </div>
                <h4>{x.name}</h4>
              </div>
              <div className="review">{x.Review}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
