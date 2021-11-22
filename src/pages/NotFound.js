import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 Page Not Found!</h1>
      <h4>
        Could not retrieve page: <code>{window.location.pathname}</code>
      </h4>
      <p>Please check you have the correct url.</p>
      <Link to="/" className="btn btn-secondary">
        Home Page
      </Link>
    </div>
  );
};

export default NotFound;
