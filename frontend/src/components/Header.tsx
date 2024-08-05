"use client";
import Image from "next/image";
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
        <Image
          width={105}
          height={0}
          src={hubnetLogo.src}
          alt="Hubnet Logo"
          style={{ height: "auto" }}
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
