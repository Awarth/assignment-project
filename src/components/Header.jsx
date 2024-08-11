import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { List, X } from "@phosphor-icons/react";

function Header({ scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [aside, setAside] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const asideRef = useRef(null); // Create a ref for the sidebar

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setAside(false);
      }
    };

    if (aside) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [aside]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId);
    setAside(false);
  };

  return (
    <div className="w-screen">
      <header
        className={`w-full flex justify-center fixed top-0 right-0 items-center border-b-2 border-b-[#E1DBD1] px-4 transition-all ease-linear duration-300 z-10 ${
          scrolled ? "py-3 bg-[#ffffff16] backdrop-blur-[10px]" : "py-4"
        }`}
      >
        <nav className="w-full max-w-[1300px] flex justify-between items-center">
          <div className="logo text-4xl">At</div>
          <div className="navOptions flex gap-8 text-xl max-[800px]:hidden">
            <p
              onClick={() => handleNavClick("home")}
              className={`cursor-pointer ${
                activeSection === "home" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to Home section"
            >
              Home
            </p>
            <p
              onClick={() => handleNavClick("about")}
              className={`cursor-pointer ${
                activeSection === "about" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to About Me section"
            >
              About Me
            </p>
            <p
              onClick={() => handleNavClick("project")}
              className={`cursor-pointer ${
                activeSection === "project" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to Projects section"
            >
              Projects
            </p>
            <p
              onClick={() => handleNavClick("skills")}
              className={`cursor-pointer ${
                activeSection === "skills" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to Skills section"
            >
              Skills
            </p>
            <p
              onClick={() => handleNavClick("contact")}
              className={`cursor-pointer ${
                activeSection === "contact" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to Contact section"
            >
              Contact
            </p>
          </div>

          <List
            size={32}
            onClick={() => setAside(true)}
            aria-label="Open menu"
            className="hidden max-[800px]:block"
          />
        </nav>
      </header>

      <nav
        ref={asideRef} // Attach the ref to the sidebar element
        className={`${
          aside ? "translate-x-0" : "translate-x-[100%]"
        } min-[800px]:hidden transition-all duration-500 ease-in fixed top-0 right-0 h-screen w-[330px] bg-white z-30`}
      >
        <div className="content relative flex h-full justify-center items-center text-center text-xl">
          <X
            size={32}
            className="absolute top-[15px] right-[15px] cursor-pointer"
            onClick={() => setAside(false)}
            aria-label="Close menu"
          />
          <div className="asideOptions flex flex-col gap-6">
            <p
              onClick={() => handleNavClick("home")}
              className={`cursor-pointer ${
                activeSection === "home" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to Home section"
            >
              Home
            </p>
            <p
              onClick={() => handleNavClick("about")}
              className={`cursor-pointer ${
                activeSection === "about" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to About Me section"
            >
              About Me
            </p>
            <p
              onClick={() => handleNavClick("project")}
              className={`cursor-pointer ${
                activeSection === "project" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to Projects section"
            >
              Projects
            </p>
            <p
              onClick={() => handleNavClick("skills")}
              className={`cursor-pointer ${
                activeSection === "skills" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to Skills section"
            >
              Skills
            </p>
            <p
              onClick={() => handleNavClick("contact")}
              className={`cursor-pointer ${
                activeSection === "contact" ? "text-[#FEAE6F]" : ""
              }`}
              aria-label="Go to Contact section"
            >
              Contact
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Header;
