import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <>
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
    </>
  );
}
