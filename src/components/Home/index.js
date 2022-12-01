import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="title">Hi, <br /> I'm Dario Alessio,<br /> web developer.</h1>
          <h2 className="subtitle">Frontend developer / Ruby on Rails & JavaScript enthusiast.</h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
      </div>
     </>
  );
}

export default Home