import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

// Components
import ShareIcons from "../components/ShareIcons";
import Image from "../components/Image";

// Files
import posts from "../resources/posts.json";

const Post = ({ match }) => {
  var post = posts.find(({ slug }) => slug === match.params.slug);

  const createMarkup = () => {
    return { __html: post.description };
  };

  return (
    <>
      <Helmet>
        <title>Adventured Places | {post.title}</title>
      </Helmet>
      <section className="py-3">
        <div className="container mb-4">
          <div className="card border-0">
            <div className="card-body">
              <div className="text-center">
                <h1 className="card-title my-4">{post.title}</h1>
                <div className="card-subtitle">
                  <div className="row">
                    <div className="col-12 col-md-4 mb-2 text-muted text-md-start">
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
                      <div className="float-md-end">
                        <ShareIcons post={post} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {post.gallery[0] && (
                <div className="post-img float-end ps-3 pb-3 w-50">
                  <Image
                    src={`../img/${post.gallery[0]}`}
                    alt={post.title}
                    className="img-fluid"
                  />
                </div>
              )}
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
                <div className="row justify-content-center align-items-center">
                  {post.gallery.map(
                    (image, i) =>
                      i !== 0 && (
                        <div className="col-12 col-md-6 p-3">
                          <div className="post-img">
                            <Image
                              src={`../img/${image}`}
                              alt={post.title}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      )
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
