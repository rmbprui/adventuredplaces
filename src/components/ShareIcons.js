import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShareIcons = ({ post }) => {
  const url = `https://${window.location.host}`;

  return (
    <div className="d-flex justify-content-center gap-3">
      <span className="text-muted">Share:</span>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}/posts/${post.slug}&title=${post.title}`}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}/posts/${post.slug}`}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${url}/posts/${post.slug}`}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <a
        href={`https://pinterest.com/pin/create/button/?url=${url}/posts/${post.slug}&media=${url}/img/${post.gallery[0]}`}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "pinterest"]} />
      </a>
    </div>
  );
};

export default ShareIcons;
