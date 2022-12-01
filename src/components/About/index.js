import './index.scss';
import { Link } from "react-router-dom";

const About = () => {

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="title">About me:</h1>
          <h2 className="subtitle">I'm a software developer with a lot of experience working as a
           product manager in the financial industry.<br /><br />
           While doing so, I've used scrum methodology and worked with multidisciplinary teams
            to develop real life financial products, allways under time and budget constraints.<br /> <br />
           Yes, I've been the 'client' many times and I know how it feels to be on the other 
           side of the table.<br /><br />
           I'm also a Mechanical Engineer and have a MBA, which helps me to understand both
            the technical and business side of things.<br /><br />
           I'm passionate about web development and I'm always looking for new challenges.<br /><br /></h2>
          
           <h2 className='subtitle2'>Frontend developer / Ruby on Rails & JavaScript enthusiast.</h2>
        </div>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
     </>
  );
};

export default About;