import { Route } from "react-router-dom";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const StandardRoute = ({
  component: Component,
  header = true,
  footer = true,
  ...rest
}) => {
  return (
    <>
      {header && <Header />}
      <main className={`${header && "navbar-margin"}`}>
        <Route {...rest} render={(props) => <Component {...props} />} />
      </main>
      {footer && <Footer />}
    </>
  );
};

export default StandardRoute;
