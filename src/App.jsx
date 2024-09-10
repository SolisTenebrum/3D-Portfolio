import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { detectOs } from "./utils/detectOs";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {detectOs() !== "android" && <Tech />}
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
