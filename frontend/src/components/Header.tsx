"use client";
import Image from "next/image";
import hubnetLogo from "/public/assets/hubnet-white.webp";
import { DiscordAndProdMenu, DiscordOnlyMenu } from "./Menus";
import { usePathname } from "next/navigation";
import { IconWrapper } from "./styled/Images";

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
      <IconWrapper>
        <Image
          src={hubnetLogo}
          alt="Hubnet Logo"
          width={0}
          height={0}
          style={{
            width: "auto",
            height: "100%",
            position: "absolute",
          }}
        />
      </IconWrapper>
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
