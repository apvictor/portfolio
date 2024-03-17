import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

export function Header() {
  const [active, setActive] = useState<string>("home");

  return (
    <header id="home" className="m-auto flex items-center justify-center lg:justify-between">
      <img className="w-auto h-[64px]" src={logo} alt="Logo" />
      <nav className="
      lg:flex
      hidden py-5 px-20 max-w-80 items-center justify-center gap-8 rounded-full backdrop-blur-sm bg-[#d9d9d914]">
        <Link
          to="home"
          href="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          onClick={() => setActive("home")}
          className="transition-all duration-500 hover:text-[#3dd8bc]"
          style={{
            color: `${active === "home" ? "#3dd8bc" : "#FFF"}`,
          }}
        >
          Home
        </Link>
        <Link
          to="projects"
          href="projects"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          onClick={() => setActive("projects")}
          className="transition-all duration-500 hover:text-[#3dd8bc]"
          style={{
            color: `${active === "projects" ? "#3dd8bc" : "#FFF"}`,
          }}
        >
          Projetos
        </Link>
        <Link
          to="about"
          href="about"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-60}
          onClick={() => setActive("about")}
          className="transition-all duration-500 hover:text-[#3dd8bc]"
          style={{
            color: `${active === "about" ? "#3dd8bc" : "#FFF"}`,
          }}
        >
          Sobre
        </Link>
      </nav>
    </header>
  );
}
