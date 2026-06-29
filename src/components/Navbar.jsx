import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <nav className="navbar">

      <div className="logo">
        {"<"}Sanchit<span>/</span>{">"}
      </div>

      <div className={`nav-links ${menu ? "active" : ""}`}>

        <Link
          to="hero"
          smooth
          duration={500}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="about"
          smooth
          duration={500}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          to="skills"
          smooth
          duration={500}
          onClick={closeMenu}
        >
          Skills
        </Link>

        <Link
          to="education"
          smooth
          duration={500}
          onClick={closeMenu}
        >
          Education
        </Link>

        <Link
          to="projects"
          smooth
          duration={500}
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link to="certifications" smooth duration={500} onClick={closeMenu}>
          Certifications
        </Link>

        <Link to="github" smooth duration={500} onClick={closeMenu}>
          GitHub
        </Link>
        <Link
          to="contact"
          smooth
          duration={500}
          onClick={closeMenu}
        >
          Contact
        </Link>

      </div>

      <div
        className="menu-btn"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}