import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Files
import cardImg from "../img/porto-wp.jpg";

const PostCard = ({ post }) => {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className="card h-100">
        <img src={cardImg} className="card-img-top" alt="Card Header" />
        <div className="card-header">
          <h4 className="text-center m-0">
            <Link className="text-decoration-none" to="/">
              {post.title}
            </Link>
          </h4>
        </div>
        <div className="card-body">
          <div className="card-text">{post.description}</div>
        </div>
        <div className="card-footer d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex gap-3">
            <span className="text-muted">Share:</span>
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
  );
};

export default PostCard;
