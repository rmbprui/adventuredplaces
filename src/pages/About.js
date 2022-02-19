// Components
import Image from "../components/Image";

const About = () => {
  return (
    <section className="py-3">
      <div className="container">
        <div className="card border-0">
          <div className="card-body">
            <h1 className="card-title">About me</h1>
            <hr />
            <div className="card-text">
              <div className="post-img float-end ps-3 w-50">
                <Image
                  src={`../img/blog2.jpg`}
                  alt="About me"
                  title="About me"
                  className="img-fluid"
                />
              </div>
              <h2>Hello and Welcome to my blog!</h2>
              <p className="lead fst-italic">
                My name is Renata, I'm Portuguese, 20 years old and studying BA
                Interior Architecture and Design at Coventry University, UK.
              </p>
              <p>
                I have decided to undertake a placement year, as part of my
                studies to help me gain experience and I'm currently doing an
                internship as an Interior Architect & Showroom Assistant at Good
                In - Interior Design, located in the vibrant and wonderful city
                of Braga, Portugal.
              </p>
              <p>
                My biggest passions besides design are travelling, exploring
                different places and cultures and the best of them all meeting
                new people. I'm an animal lover and saver and an avid film lover
                always sneaking into a nice cinema when I get the chance.
              </p>
              <p>
                I've decided to create this blog as a way of documenting my
                first professional experience as an Interior Architect but also
                to share some of the adventures that might happen along the way
                in the Erasmus year abroad.
              </p>
              <p>
                Within the blog I am aiming to share, the kind of projects we
                develop as Interior Architects, as well as to share a bit of my
                personal experience in my home country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
