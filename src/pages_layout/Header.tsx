import { Link } from "react-router-dom";
import "../../start.css";
import groupPictureCropped from "../assets/group-picture-cropped.png";

export const Header = () => {
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
        <Link className="menu-link" to="/shows">
          Shows
        </Link>
        <Link className="menu-link" to="/producers">
          Producers
        </Link>
        <Link className="menu-link" to="/community">
          Community
        </Link>
      </div>
    </header>
  );
};
