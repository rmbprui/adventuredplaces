const HomePage = () => {
  return (
    <>
      <div style={{ height: "50vh" }}>
        <div className="container py-3">
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <h1>White Background</h1>
            </div>
            <div className="col-3 text-center">
              <button className="btn btn-primary">Primary Button</button>
            </div>
            <div className="col-3 text-center">
              <button className="btn btn-secondary">Secondary Button</button>
            </div>
            <div className="col-3 text-center">
              <button className="btn btn-light">Light Button</button>
            </div>
            <div className="col-3 text-center">
              <button className="btn btn-dark">Dark Button</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light" style={{ height: "50vh" }}>
        <div className="container py-3">
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <h1>Light Background</h1>
            </div>
            <div className="col-3 text-center">
              <h4 className="text-primary">Primary text</h4>
            </div>
            <div className="col-3 text-center">
              <h4 className="text-secondary">Secondary text</h4>
            </div>
            <div className="col-3 text-center bg-dark rounded">
              <h4 className="text-light">Light text</h4>
            </div>
            <div className="col-3 text-center">
              <h4 className="text-dark">Dark text</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark" style={{ height: "50vh" }}>
        <div className="container py-3">
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <h1>Dark Background</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
