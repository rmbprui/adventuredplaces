import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
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

  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-3">
        <div className="row">
          <div className="d-flex justify-content-center gap-3">
            <a className="link-light" href="/">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a className="link-light" href="/">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a className="link-light" href="/">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a className="link-light" href="/">
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </a>
          </div>
          <span className="text-center">Adventured Places | &copy; 2021</span>
        </div>
      </div>
      {scrollPosition && (
        <button
          className="btn btn-outline-secondary btn-top rounded-circle"
          onClick={() => window.scrollTo(0, 0)}
        >
          <FontAwesomeIcon icon={["fas", "chevron-up"]} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
