// Components
import PostCard from "./PostCard";

// Files
import posts from "../resources/posts.json";

const PostsList = () => {
  return (
    <>
      <span id="posts" className="anchor"></span>
      <section>
        <div className="container py-5">
          <div className="row">
            {posts && posts.reverse().map((post) => <PostCard post={post} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostsList;
