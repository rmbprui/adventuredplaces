import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import PostsList from "../components/PostsList";

const HomePage = () => {
  return (
    <>
      <div
        className="banner homepage-banner"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/banner.jpg')",
        }}
      >
        <div className="banner-content text-light">
          <FontAwesomeIcon icon={["fas", "map-marker-alt"]} size="3x" />
          <h1 className="text-light display-2">Adventured Places</h1>
        </div>
        <div className="banner-footer text-light">
          <a className="scroll-down pointer" href="#posts">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <PostsList />
    </>
  );
};

export default HomePage;
