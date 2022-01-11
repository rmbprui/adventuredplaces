import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

const StandardRoute = ({
  title,
  component: Component,
  header = true,
  footer = true,
  ...rest
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {header && <Header />}
      <main className={`${header && "navbar-margin"}`}>
        <Route {...rest} render={(props) => <Component {...props} />} />
      </main>
      {footer && <Footer />}
    </>
  );
};

export default StandardRoute;
