import madeByCommunity from "../../public/assets/made-by-community-logo.png";
import hubnetLogo from "../../public/assets/hubnet-white-logo.png";
import starCitizenLogo from "../../public/assets/starcitizen-logo.png";
import discordLogo from "../../public/assets/discord-logo.png";

export const Footer = () => {
  return (
    <footer style={{ display: "flex", padding: "10px" }}>
      <section style={{ alignSelf: "center" }}>
        <img
          src={madeByCommunity.src}
          alt="Made By Community Logo"
          style={{ aspectRatio: "1/1", height: "150px" }}
        />
      </section>
      <section style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "65%",
            margin: "auto",
          }}
        >
          <img
            src={hubnetLogo.src}
            alt="Hubnet Logo"
            style={{ width: "50px" }}
          />
          <span>PRODUCERS</span>
          <img
            src={discordLogo.src}
            alt="Discord Logo"
            style={{ width: "50px" }}
          />
        </div>
        <div>
          <p>
            The videos on this website are non-commercial fan productions. Star
            Citizen, Squadron 42, and all related marks, logos and characters
            are solely owned by Cloud Imperium Rights, LLC and/or Cloud Imperium
            Rights Ltd. This fan production is not endorsed by, sponsored by, or
            affiliated with Cloud Imperium Group. No commercial exploitation,
            exhibition, or distribution is permitted. No alleged independent
            rights may be asserted against Cloud Imperium or its affiliates.
          </p>
        </div>
      </section>
      <section style={{ alignSelf: "center" }}>
        <img
          src={starCitizenLogo.src}
          alt="Star Citizen Logo"
          style={{ aspectRatio: "1/1", height: "150px" }}
        />
      </section>
    </footer>
  );
};
