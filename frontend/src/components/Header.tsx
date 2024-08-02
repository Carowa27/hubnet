"use client";
import hubnetLogo from "../../public/assets/hubnet-white.png";
import { DiscordAndProdMenu, DiscordOnlyMenu } from "./Menus";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();

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
        {pathName === "/" ? <DiscordAndProdMenu /> : <DiscordOnlyMenu />}
      </section>
    </header>
  );
};
