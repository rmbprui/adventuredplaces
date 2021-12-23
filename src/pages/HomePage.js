import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import PostCard from "../components/PostCard";

// Files
import posts from "../resources/posts.json";

const HomePage = () => {
  return (
    <>
      <div
        className="banner homepage-banner"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/porto-wp.jpg')",
        }}
      >
        <div className="banner-content text-light">
          <FontAwesomeIcon icon={["fas", "map-marker-alt"]} size="3x" />
          <h1 className="text-light display-2">Adventured Places</h1>
        </div>
        <div className="banner-footer text-light">
          <a class="scroll-down pointer" href="#posts">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
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

export default HomePage;
