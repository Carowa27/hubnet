import { Link } from "react-router-dom";
import "../../start.css";

export const Header = () => {
  return (
    <>
      <div className="header-img">header img</div>
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
    </>
  );
};
