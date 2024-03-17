import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
// import { Projects } from "./components/Projects";
import { Section } from "./components/Section";
import { Tech } from "./components/Tech";

export function App() {
  return (
    <div className="relative">
      <div className="lg:max-w-7xl w-full px-8 py-6 mx-auto">
        <Header />
        <Profile />
        <Section />
        <Tech />
        {/* <Projects /> */}
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
