import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onNavigation = () => {
    document.querySelector(".collapse").classList.remove("show");
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-md ${
        scrollPosition < 20 && window.location.pathname === "/"
          ? "navbar-dark bg-transparent"
          : "navbar-light bg-white"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={onNavigation}>
          Adventured Places
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
          aria-controls="navbar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={["fas", "bars"]} />
        </button>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link${
                  window.location.pathname.includes("/about") ? " active" : ""
                }`}
                aria-current="page"
                to="/about"
                onClick={onNavigation}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${
                  window.location.pathname.includes("/contact") ? " active" : ""
                }`}
                to="/contact"
                onClick={onNavigation}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
