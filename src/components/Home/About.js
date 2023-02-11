import '../style/about.css'
import adrian from "../images/Home/About/Mario_and_Adrian_A.jpg";
import mario from "../images/Home/About/Mario_and_Adrian_B.jpg";
export function About() {
  return (
    <div id="About" className="About">
      <div className="title_description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a cozy and casual eatery located in the heart of
          Chicago. The restaurant offers a menu of fresh, Mediterranean-inspired
          dishes that are both healthy and flavorful. The menu features a
          variety of options including salads, sandwiches, and small plates that
          are perfect for sharing. The restaurant also offers a selection of
          beer, wine, and signature cocktails to complement the food. The
          atmosphere is casual and inviting, making it a great spot for a casual
          lunch or dinner with friends. With its delicious food, comfortable
          atmosphere, and friendly staff, Little Lemon is a must-visit for
          anyone looking for a great Mediterranean dining experience in Chicago.
        </p>
      </div>
      <div className="two_img">
        <img className="adrian_img" src={adrian} alt="Adrian" />
        <img className="mario_img" src={mario} alt="Mario" />
      </div>
    </div>
  );
};
