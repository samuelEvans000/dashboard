/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.jpg";
import dashboard from "../../images/dashboard.png";
import Game from "../../images/Game.png";
import Location from "../../images/Location.png";
import User from "../../images/user.png";
const Sidebar = () => {
  return (
    <div className="side">
      <>
        <aside className="sidebar">
          <div className="logo">
            <img src={logo} alt=""></img>
          </div>
        </aside>
        <aside className="dashboard-sidebar">
          <div>
            <ul className="buttons">
              <li>
                <button className="dashboard-button">
                  {" "}
                  <img src={dashboard}></img> Dashboard
                </button>
              </li>

              <li>
                <button>
                  <img src={Game}></img>Training
                </button>
              </li>
              <li>
                <button>
                  <img src={User}></img>Users
                </button>
              </li>
              <li>
                <button>
                  <img src={Location}></img>Analytics
                </button>
              </li>
              <li>
                <button>
                  <img src={Location}></img>My Account
                </button>
              </li>
              <li>
                <button>
                  <img src={Location}></img>Support
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </>
    </div>
  );
};

export default Sidebar;
