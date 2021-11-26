// Files
import posts from "../resources/posts.json";

const Post = ({ match }) => {
  var post = posts.find(({ slug }) => slug === match.params.slug);

  const createMarkup = () => {
    return { __html: post.description };
  };

  return (
    <section className="py-3">
      <div className="container card">
        <div className="card-body">
          <h1 className="card-title">{post.title}</h1>
          <hr />
          <div className="card-text">
            <div dangerouslySetInnerHTML={createMarkup()}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
