import MBTCLogo from "../assets/made-by-community-logo.png";
import SCLogo from "../assets/starcitizen-logo.png";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-content">
        <div className="logo-container">
          <img src={MBTCLogo} alt="Made By the Community logo" />
        </div>
        <p>
          The videos on this website are non-commercial fan productions. Star
          Citizen, Squadron 42, and all related marks, logos and characters are
          solely owned by Cloud Imperium Rights, LLC and/or Cloud Imperium
          Rights Ltd. This fan production is not endorsed by, sponsored by, or
          affiliated with Cloud Imperium Group. No commercial exploitation,
          exhibition, or distribution is permitted. No alleged independent
          rights may be asserted against Cloud Imperium or its affiliates.
        </p>
        <div className="logo-container">
          <a href="https://robertsspaceindustries.com/">
            <img src={SCLogo} alt="Star Citizen logo" />
          </a>
        </div>
      </div>
      <span>Carolina Warntorp & Jennifer McAllister &copy; 2022</span>
    </div>
  );
};
