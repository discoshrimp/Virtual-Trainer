import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css";

const Navbar = props => {
  const image = (
    <span class="logo">
      <a href="https://docs.google.com/presentation/d/1cT0BN699ZWZx1rRhQvCp2tnBbJZj4h5aQ2yR1fM3cr0/edit#slide=id.g4572ee1381_0_42">
        <img
          src="https://res.cloudinary.com/djulaton/image/upload/v1541103948/vt-logo4.jpg"
          height="100"
          width="350"
          alt="virtual-trainer logo"
          margin-left="-90"
          padding="10"
          margin="10"
        />
      </a>
    </span>
  );
  if (props.loggedIn) {
    return (
      <nav>
        <div className="nav-wrapper gray">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="nav-item">
              <Link to="#" className="nav-link" onClick={props.logout}>
                Logout
              </Link>
            </li>
            <li>
              <Link to="/articles" className="nav-link">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/Profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {image}
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="nav-wrapper gray">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {image}
          </ul>
        </div>
      </nav>
    );
  }
};

export default withRouter(Navbar);
