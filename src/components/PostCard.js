import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import ShareIcons from "./ShareIcons";

const PostCard = ({ post }) => {
  const history = useHistory();

  return (
    <div className="col-12 col-md-6 mb-3">
      <div
        className="post-card card border-0 h-100"
        onClick={() => history.push(`/posts/${post.slug}`)}
      >
        <div className="px-4 pt-4">
          <Link to={`/posts/${post.slug}`}>
            <div
              className="card-img-top"
              style={{
                backgroundImage: `url(/img/${post.gallery[0]})`,
              }}
            ></div>
          </Link>
        </div>
        <div className="card-body px-4">
          <div className="card-title py-2">
            <h4 className="text-truncate text-center m-0">
              <Link className="text-decoration-none" to={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h4>
          </div>
          <div className="card-subtitle d-flex justify-content-center gap-3">
            <div className="text-muted">{post.date}</div>
            <div>
              <FontAwesomeIcon
                icon={["fas", "map-marker-alt"]}
                className="me-2"
              />
              {post.location}
            </div>
          </div>
          <div className="card-text text-center py-2">
            {post.summary.substring(0, 150)}
            {post.summary.length > 150 && "..."}
          </div>
          <div className="card-text row justify-content-center px-2 py-2">
            {post.tags.map((tag) => (
              <div className="col-4 col-md-4 col-lg-3 text-center">
                <span className="text-truncate text-muted">#{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer px-4 d-flex justify-content-between align-items-center">
          <ShareIcons post={post} />
          <Link className="btn btn-outline-primary" to={`/posts/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
