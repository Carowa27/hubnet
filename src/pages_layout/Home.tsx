import { Shows } from "../data/Shows";
import { ShowsSmall } from "../components/ShowSmall";
import { Show } from "../models/Show";
import hubnetLogo from "../assets/hubnet-white.png";

export const Home = () => {
    const shows: Show[] = Shows;

  return (
    <div className="home-content">
      <div className="home-content-shows">
        <h2>Shows</h2>
        <div className="home-shows-container">
          {shows.map((s, index) => (
            <ShowsSmall show={s} key={index}></ShowsSmall>
          ))}
        </div>

      </div>
      <div className="about-hubnet-fade-overlay"></div>
      <div className="home-content-about-hubnet">
        
        <div className="about-hubnet-info">
          <div className="about-hubnet-logo">
            <img src={hubnetLogo} alt="Hubnet Logo" />
          </div>
          <div className="about-hubnet-text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
