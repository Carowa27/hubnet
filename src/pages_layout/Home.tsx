import backgroundVideo from "../assets/temporary-video.mp4";
import hubnetLogo from "../assets/hubnet-black.png";

export const Home = () => {
  return (
    <div className="home-content">
      <h1>HOME</h1>
      <div className="video-container">
        <div className="inner-container">
          <div className="video-overlay">
            <div className="button-container">
              <button>START WATCHING</button>
            </div>
            <div className="hubnet-down-container">
              <span>ABOUT HUBNET</span>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
          </div>
          <video autoPlay loop muted className="background-video">
            <source src={backgroundVideo} type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className="about-container">
        <div className="hubnet-logo-container">
          <img src={hubnetLogo} alt="Hubnet logo" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </p>
      </div>
    </div>
  );
};
