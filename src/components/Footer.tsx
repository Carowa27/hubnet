import madeByCommunity from "/public/assets/made-by-community-logo.png";
import hubnetLogo from "/public/assets/hubnet-white.png";
import starCitizenLogo from "/public/assets/STARCITIZEN_WHITE.webp";
import discordLogo from "/public/assets/icons/discord.svg";
import Image from "next/image";

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
          <div style={{ width: "2rem", height: "2rem", position: "relative" }}>
            <Image
              src={discordLogo}
              alt="Discord Logo"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
              }}
            />
          </div>
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
          style={{ height: "150px" }}
        />
      </section>
    </footer>
  );
};
