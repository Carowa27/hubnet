import { Menu } from "../components/Menu";
import backgroundVideo from "../assets/temporary-video.mp4";

export const Header = () => {
  return (
    <header>
      <Menu></Menu>
      <div className="header-container">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
      </div>
    </header>
  );
};
