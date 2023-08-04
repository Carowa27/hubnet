import { Menu } from "../components/Menu";
import backgroundVideo from "../assets/temporary-video.mp4";
import hubnetLogo from "../assets/hubnet-white.png";


export const Header = () => {
  return (
    <header>
      <Menu></Menu>
      <div className="header-container">
      <div className="hubnet-logo-container">
        <img src={hubnetLogo} alt="Hubnet Logo" />
      </div>
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
      </div>
    </header>
  );
};
