import DiscordLogo from "../assets/discord-logo.png";
import "../../startC.css";

export const Community = () => {
  return (
    <>
      <div className="community-header-container">
        <h1 className="community-header">Get Connected</h1>
      </div>
      <div className="connect-container">
        <p>Join our discord channel</p>
        <div className="img-container">
          <img className="img-discord" src={DiscordLogo} alt="discord logo" />
        </div>
      </div>
      <div className="voiceacting-container">
        <p>
          Flixmix start your acting carier! If you want to know more watch this
          video
        </p>
        <div className="video-container">VIDEO</div>
      </div>
    </>
  );
};
