import "../styles/App.css"
import gitHub from "../assets/images/github-logo.png"
import linkedin from "../assets/images/linkedin.png"

export default function Copy() {
  return (
      <footer>
          <p>This website is not official from Lamborghini.</p>
          <a href="https://github.com/ckzwebber" target="_blank" rel="noopener noreferrer">
              <img className="social" src={gitHub} alt="GitHub logo"/>
          </a>
          <a href="https://www.linkedin.com/in/cmiguelwm/" target="_blank" rel="noopener noreferrer">
              <img className="social" src={linkedin} alt="Linkedin"/>
          </a>
      </footer>
  );
}
