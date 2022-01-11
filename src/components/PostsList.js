// Components
import PostCard from "./PostCard";

// Files
import posts from "../resources/posts.json";

const PostsList = () => {
  const postsList = posts && posts.reverse();

  return (
    <>
      <span id="posts" className="anchor"></span>
      <section>
        <div className="container py-5">
          <div className="row">
            {postsList && postsList.map((post) => <PostCard post={post} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostsList;
