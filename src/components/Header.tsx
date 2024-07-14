import hubnetLogo from "../../public/assets/hubnet-white.png";
import discordLogo from "../../public/assets/discord-logo.png";

export const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
      }}
    >
      <section>
        <img
          src={hubnetLogo.src}
          alt="Hubnet Logo"
          style={{ height: "40px" }}
        />
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>PRODUCERS</span>
        <img
          src={discordLogo.src}
          alt="Discord Logo"
          style={{ height: "40px" }}
        />
      </section>
    </header>
  );
};
