import hubnetLogo from "../../public/assets/hubnet-white.png";
import { DiscordAndProdMenu, DiscordOnlyMenu } from "./Menus";

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
          style={{ height: "60px" }}
        />
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <DiscordOnlyMenu />
        <DiscordAndProdMenu />
      </section>
    </header>
  );
};
