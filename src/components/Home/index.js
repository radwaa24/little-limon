import {Header} from "../Header";
import {Footer} from "../Footer";
import {Hero} from "./Hero";
import {Highlights} from "./Highlights";
import {Testimonials} from "./Testimonials";
import {About} from "./About";

export function Home() {
  return (
    <div>
      <Header name="About" home="Home" />
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer name="About" home="Home" />
    </div>
  );
}

