import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import ShareIcons from "../components/ShareIcons";

// Files
import posts from "../resources/posts.json";

const Post = ({ match }) => {
  var post = posts.find(({ slug }) => slug === match.params.slug);

  const createMarkup = () => {
    return { __html: post.description };
  };

  return (
    <>
      <section className="py-3">
        <div className="container mb-4">
          <div className="card border-0">
            <div className="card-body">
              <div className="text-center">
                <h1 className="card-title">{post.title}</h1>
                <div className="card-subtitle">
                  <div className="row">
                    <div className="col-12 col-md-4 mb-2 text-muted">
                      {post.date}
                    </div>
                    <div className="col-12 col-md-4 mb-2">
                      <FontAwesomeIcon
                        icon={["fas", "map-marker-alt"]}
                        className="me-2"
                      />
                      {post.location}
                    </div>
                    <div className="col-12 col-md-4 mb-2">
                      <ShareIcons post={post} />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="post-img float-end ps-2 w-50">
                <img src={`../img/${post.gallery[0]}`} alt={post.title} />
              </div>
              <div className="card-text">
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={createMarkup()}
                ></div>
              </div>
              <div className="card-text row justify-content-center px-2 py-2">
                {post.tags.map((tag) => (
                  <div className="col-6 col-lg-3 text-center">
                    <span className="text-muted">#{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {post.gallery.length > 1 && (
          <div className="container">
            <div className="card border-0">
              <div className="card-body">
                <div className="d-flex gap-3">
                  <div className="post-img w-50">
                    <img src={`../img/${post.gallery[1]}`} alt={post.title} />
                  </div>
                  {post.gallery[2] && (
                    <div className="post-img w-50">
                      <img src={`../img/${post.gallery[2]}`} alt={post.title} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Post;
