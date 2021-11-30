import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:renatacunhaiad@gmail.com?subject=${subject}&body=${message}`
    );
  };

  return (
    <footer className="footer">
      <div className="bg-white">
        <div className="container d-flex justify-content-center justify-content-md-between p-4 border-bottom">
          <div className="me-5 d-none d-md-block">
            <span>Get connected:</span>
          </div>
          <div className="d-flex gap-3">
            <a
              href="https://www.instagram.com/nc_intdesign/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
              href="mailto:renatacunhaiad@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </a>
          </div>
        </div>
        <div className="container text-center text-md-start mt-4">
          <div className="row justify-content-around mt-3">
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={["fas", "gem"]} className="me-3" />
                Adventured Places
              </h6>
              <p>
                <u>Adventured Places</u> is my online scrapbook; a place where I
                can hoard all my favourite travel memories,{" "}
                <strong style={{ fontFamily: "Lucida Handwriting" }}>
                  design{" "}
                </strong>
                ideas, visual imagery and some thoughts. My own little{" "}
                <strong style={{ fontFamily: "Consolas" }}>cyber</strong>{" "}
                corner.
              </p>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <FontAwesomeIcon
                  icon={["fas", "home"]}
                  className="footer-icon"
                />
                <Link to="/">Home</Link>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={["fas", "info"]}
                  className="footer-icon"
                />
                <Link to="/about">About</Link>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={["fas", "phone"]}
                  className="footer-icon"
                />
                <Link to="/contact">Contact</Link>
              </p>
            </div>
            <div className="col-md-5 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <form onSubmit={onSubmit}>
                <div className="mb-2">
                  <div className="d-flex gap-3">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      type="email"
                      placeholder="Your email..."
                      required
                    />
                    <button type="submit" className="btn btn-success send-btn">
                      Send
                      <FontAwesomeIcon
                        icon={["fas", "paper-plane"]}
                        className="ms-2"
                      />
                    </button>
                  </div>
                </div>
                <div className="mb-2">
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row bg-primary text-light py-3">
          <span className="text-center">Adventured Places &copy; 2021</span>
        </div>
      </div>
      {scrollPosition > 80 && (
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
