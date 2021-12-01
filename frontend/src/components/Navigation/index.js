import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import logo from "./placeholder-logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div className="loginButton">
          <LoginFormModal />
        </div>
        <div className="signupButton">
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="navbar">
      <div className="navLinks">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} className="homeButton" />
          </NavLink>
        </div>
        <div className="browseButton">
          <NavLink to="/browse">Browse</NavLink>
        </div>
        <div className="makeButton">
          <NavLink to="/createSession">Make a Session</NavLink>
        </div>
      </div>
      {/* <div className="searchBar">
        <form>
          <input type="text"></input>
          <button type="submit>">go</button>
        </form>
      </div> */}

      <div className="login_signup">
        <div>{isLoaded}</div>
        <div>{sessionLinks}</div>
      </div>
    </div>
  );
}

export default Navigation;
