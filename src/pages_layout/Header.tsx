import { Link } from "react-router-dom";
import groupPictureCropped from "../assets/group-picture-cropped.png";
import { useState } from "react";

export const Header = () => {
  const [showShowsMenu, setShowShowsMenu] = useState(false);
  return (
    <header>
      <div className="header-img-container">
        <img
          className="header-img"
          src={groupPictureCropped}
          alt="group image of team"
        />
      </div>
      <div className="header-menu">
        <Link className="menu-link" to="/">
          Home
        </Link>
        <div
          className="menu-link menu-show-container"
          onClick={() => {
            setShowShowsMenu(!showShowsMenu);
          }}
        >
          Shows
          <div id="arrows">
            {!showShowsMenu ? <span>&#5121;</span> : <span>&#5130;</span>}
          </div>
        </div>
        <Link className="menu-link" to="/producers">
          Producers
        </Link>
        <Link className="menu-link" to="/community">
          Community
        </Link>
      </div>
      {showShowsMenu && (
        <div className="menu-shows">
          <div className="show-choice">Bladibla</div>
          <div className="show-choice">Bladibla</div>
          <div className="show-choice">Bladibla</div>
        </div>
      )}
    </header>
  );
};
