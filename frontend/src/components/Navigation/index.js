import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import ProfileButton from "./ProfileButton";
import { logout } from "../../store/session";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import logo from "./placeholder-logo.png";

function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state?.userSession?.user);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="profileButton">
        <div className="chatsModalButton">My chats</div>
        <NavLink to={`/profiles/${sessionUser.id}`}>My profile</NavLink>
        <div
          className="logoutButton"
          onClick={(e) => {
            dispatch(logout());
          }}
        >
          Logout
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="login_signupButtons">
        <div className="loginButton">
          <LoginFormModal />
        </div>
        <div className="signupButton">
          <NavLink to="/signup">Sign Up</NavLink>
        </div>

      </div>
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
      <div className="userButtons">{sessionLinks}</div>
    </div>
  );
}

export default Navigation;
