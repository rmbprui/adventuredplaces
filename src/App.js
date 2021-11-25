import { BrowserRouter as Router, Switch } from "react-router-dom";

// Routes
import StandardRoute from "./routes/StandardRoute";

// Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <StandardRoute exact path="/" component={HomePage} />
        <StandardRoute exact path="/about" component={About} />
        <StandardRoute exact path="/contact" component={Contact} />
        <StandardRoute component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
