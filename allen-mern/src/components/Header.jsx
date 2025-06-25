import logo from "../assets/logo.svg";
import banner1 from "../assets/banner1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="nav-left">
            <img src={logo} />
            <p>Courses</p>
            <p>Test Series</p>
            <p>Results</p>
            <p>Study Materials</p>
            <p>Scholarships</p>
            <p>Books</p>
            <p>More</p>
          </div>
          <div className="nav-right">
            <div className="phone-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <button>Login</button>
          </div>
        </div>
        <div className="header-banner">
          <p>
            <code>GET UP TO 90% SCHOLARSHIP </code>
            on Neet repeater courses for 2026 
          </p>
        </div>
      </header>

      <section className="hero">

        <div className="hero-banner">
            <img src={banner1} alt="" />
        </div>

      </section>
      
    </>
  );
}
