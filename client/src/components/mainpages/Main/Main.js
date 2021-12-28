import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalState } from "../../../GlobalState";

const Main = () => {
  const state = useContext(GlobalState);
  const [user] = state.userAPI.userInfo;
  const { avatar, name, email, _id } = user;
  return (
    <main>
      <div className="container">
        {/* ========================== Left ====================== */}
        <div className="left">
          <Link to="#!" className="profile">
            <div className="profile-photo">
              <img src={avatar} alt="" />
            </div>
            <div className="handle">
              <h4>{name}</h4>
              <p className="text-muted">@yath123</p>
            </div>
          </Link>
          {/* -------------------------sidebar-------------------- */}
          <div className="sidebar">
            <Link to="#!" className="menu-item active">
              <span>
                <i className="uil uil-home"></i> <h3>Home</h3>
              </span>
            </Link>
            <Link to="#!" className="menu-item">
              <span>
                <i className="uil uil-compass"></i> <h3>Explore</h3>
              </span>
            </Link>
            <Link to="#!" className="menu-item" id="notifications">
              <span>
                <i className="uil uil-bell"><small className="notification-count">9+</small></i> <h3>Notifications</h3>
              </span>
              {/* -------------------- Notification PopUp---------------- */}
                <div className="notification-popup">
                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Kake Benjamin</b> accepted your friend request
                      <small className="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Kake Benjamin</b> accepted your friend request
                      <small className="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Kake Benjamin</b> accepted your friend request
                      <small className="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Kake Benjamin</b> accepted your friend request
                      <small className="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Kake Benjamin</b> accepted your friend request
                      <small className="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Kake Benjamin</b> accepted your friend request
                      <small className="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                </div>
            </Link>
            <Link to="#!" className="menu-item" id="messages-notifications">
              <span>
                <i className="uil uil-envelope-alt"><small className="notification-count">6</small></i> <h3>Messages</h3>
              </span>
            </Link>
            <Link to="#!" className="menu-item">
              <span>
                <i className="uil uil-bookmark"></i> <h3>Bookmarks</h3>
              </span>
            </Link>
            <Link to="#!" className="menu-item">
              <span>
                <i className="uil uil-chart-line"></i> <h3>Analytics</h3>
              </span>
            </Link>
            <Link to="#!" className="menu-item">
              <span>
                <i className="uil uil-palette"></i> <h3>Theme</h3>
              </span>
            </Link>
            <Link to="#!" className="menu-item">
              <span>
                <i className="uil uil-setting"></i> <h3>Settings</h3>
              </span>
            </Link>
          </div>
          <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
        </div>
        {/* ========================== Middle ====================== */}
        <div className="middle">
          
        </div>
        {/* ========================== Right ====================== */}
        <div className="right">
          
        </div>
      </div>
    </main>
  );
};

export default Main;
