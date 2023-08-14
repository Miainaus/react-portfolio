import './index.scss'
import { Link} from 'react-scroll'
import LogoM from '../../assets/images/logo-m.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope ,faBarsProgress} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo">
        <img src={LogoM} alt="logo" />
        
      </Link>
      <nav>
        <Link
          activeClass="active"
          className="home-link"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </Link>
        <Link
        
          activeClass="active"
          className="about-link"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
        <Link
          activeClass="active"
          className="projects-link"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <FontAwesomeIcon icon={faBarsProgress} color="#4d4d4e" />
        </Link>
        <Link
     
          activeClass="active"
          className="contact-link"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mia-zhang-722a8921a/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Miainaus"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
     
    </div>
  )
}

export default Navbar
