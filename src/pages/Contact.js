import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:renatacunhaiad@gmail.com?subject=${subject}&body=${message}`
    );
  };

  return (
    <section className="py-3">
      <div className="container">
        <div className="card border-0 mb-3">
          <div className="card-body">
            <h1 className="card-title">Contact</h1>
            <hr />
            <div className="row text-md-center">
              <h4>Feel free to contact me on any of my socials!</h4>
              <div className="col-12 col-md-6">
                <a
                  href="https://www.instagram.com/nc_intdesign/"
                  className="text-decoration-none"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="me-2"
                  />
                  @nc_intdesign
                </a>
              </div>
              <div className="col-12 col-md-6">
                <a
                  href="mailto:renatacunhaiad@gmail.com"
                  className="text-decoration-none"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fas", "envelope"]}
                    className="me-2"
                  />
                  renatacunhaiad@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="mb-2">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  type="email"
                  placeholder="Your email..."
                  required
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Subject</label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="Your message..."
                  rows={10}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success float-end">
                Send
                <FontAwesomeIcon
                  icon={["fas", "paper-plane"]}
                  className="ms-2"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
