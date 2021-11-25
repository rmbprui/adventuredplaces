import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import cardImg from "../img/porto-wp.jpg";

const HomePage = () => {
  return (
    <>
      <section className="banner homepage-banner">
        <div className="banner-content text-light">
          <FontAwesomeIcon icon={["fas", "map-marker-alt"]} size="3x" />
          <h1>Adventured Places</h1>
        </div>
      </section>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6 text-center">
              <div className="card">
                <img src={cardImg} className="card-img-top" alt="Card Header" />
                <div className="card-header">
                  <h4 className="m-0">
                    <Link className="text-dark text-decoration-none" to="/">
                      Post title
                    </Link>
                  </h4>
                </div>
                <div className="card-body">
                  <div className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin aliquet justo pellentesque tortor pretium rutrum. Sed
                    placerat eget magna ac luctus.
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3">
                    <span className="fw-bold">Share:</span>
                    <a href="/">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={["fas", "envelope"]} />
                    </a>
                  </div>
                  <Link className="btn btn-outline-primary" to="/">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="card">
                <img src={cardImg} className="card-img-top" alt="Card Header" />
                <div className="card-header">
                  <h4 className="m-0">
                    <Link className="text-dark text-decoration-none" to="/">
                      Post title
                    </Link>
                  </h4>
                </div>
                <div className="card-body">
                  <div className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin aliquet justo pellentesque tortor pretium rutrum. Sed
                    placerat eget magna ac luctus.
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3">
                    <span className="fw-bold">Share:</span>
                    <a href="/">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={["fas", "envelope"]} />
                    </a>
                  </div>
                  <Link className="btn btn-outline-primary" to="/">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
