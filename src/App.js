import { BrowserRouter as Router, Switch } from "react-router-dom";

// Routes
import StandardRoute from "./routes/StandardRoute";

// Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <StandardRoute
          exact
          path="/"
          title="Adventured Places"
          component={HomePage}
        />
        <StandardRoute
          path="/about"
          title="Adventured Places | About"
          component={About}
        />
        <StandardRoute
          path="/contact"
          title="Adventured Places | Contact"
          component={Contact}
        />
        <StandardRoute
          exact
          path="/posts"
          title="Adventured Places | Posts"
          component={Posts}
        />
        <StandardRoute
          exact
          path="/posts/:slug"
          title="Adventured Places"
          component={Post}
        />
        <StandardRoute
          path="*"
          title="Adventured Places | Not Found"
          component={NotFound}
        />
      </Switch>
    </Router>
  );
};

export default App;
