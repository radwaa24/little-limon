import {Header} from "./Header";
import {Footer} from "./Footer";


export function Menu() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="text-section">
          <section className="reserve-header-text">
            <h1>Menu</h1>
            <h3>Comming Soon</h3>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
