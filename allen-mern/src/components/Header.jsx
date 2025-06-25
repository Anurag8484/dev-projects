import logo from "../assets/logo.svg";
import banner1 from "../assets/banner1.png"
import neet1 from "../assets/neet-1.png"
import neet2 from "../assets/neet-2.png"
import neet3 from "../assets/neet-3.png"
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

      <section className="home-content1">
        <div className="content1">
          <div className="top-content1">Pick the right course for you</div>
          <div className="bottom-content1">
            <div className="content1-card">
              <div className="card-top">
                <p>Neet Courses</p>
              </div>
              <div className="card-bottom1">
                <div className="card-bottom-text">
                  <p>View Courses</p>
                </div>
                <img src={neet1} alt="" />
              </div>
            </div>
            <div className="content1-card">
              <div className="card-top">
                <p>JEE Courses</p>
              </div>
              <div className="card-bottom2">
                <div className="card-bottom-text">
                  <p>View Courses</p>
                </div>
                <img src={neet2} alt="" />
              </div>
            </div>
            <div className="content1-card">
              <div className="card-top">
                <p>Courses for class 6-10</p>
              </div>
              <div className="card-bottom3">
                <div className="card-bottom-text">
                  <p>View Courses</p>
                </div>
                <img src={neet3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
