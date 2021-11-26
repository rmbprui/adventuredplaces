import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Files
import cardImg from "../img/porto-wp.jpg";

const PostCard = ({ post }) => {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className="card rounded-0 h-100">
        <div className="px-4 pt-4">
          <Link to={`/posts/${post.slug}`}>
            <img
              src={cardImg}
              className="card-img-top rounded-0"
              alt={post.title}
              title={post.title}
            />
          </Link>
        </div>
        <div className="card-body px-4">
          <div className="card-title py-2">
            <h4 className="text-center m-0">
              <Link className="text-decoration-none" to={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h4>
          </div>
          <div className="card-text text-center py-2">
            {post.summary.substring(0, 150)}
            {post.summary.length > 150 && "..."}
          </div>
          <div className="card-text d-flex justify-content-center gap-3 pt-2">
            {post.tags.map((tag) => (
              <span className="text-muted">#{tag}</span>
            ))}
          </div>
        </div>
        <div className="card-footer px-4 d-flex justify-content-between align-items-center">
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
          <Link className="btn btn-outline-primary" to={`/posts/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
