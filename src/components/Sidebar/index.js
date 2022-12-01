import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logoda from '../../assets/images/logo-da-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className='logo' to="/">
      <img src={logoda} alt="logo" />
      <div className="logo-text">
        <h3>Dario Alessio</h3>
      </div>
    </Link>

    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/dario-alessio/?locale=en_US'>
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href='https://github.com/DarioAlessioR'>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>

    </ul>

  </div>
  )

export default Sidebar;