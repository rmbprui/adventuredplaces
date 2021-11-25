import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <div className="container py-3">
        <div className="row">
          <div className="col-12">
            <h1>404 Page Not Found!</h1>
            <h4>
              Could not retrieve page: <code>{window.location.pathname}</code>
            </h4>
            <p>Please check you have the correct url.</p>
            <Link to="/" className="btn btn-secondary">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
