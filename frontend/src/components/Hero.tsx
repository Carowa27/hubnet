import { HeroContainer } from "./styled/Containers";
import heroImg from "../../public/assets/temporary-background-home.png";
import hubnetLogo from "/public/assets/hubnet-white.webp";
import { HeroInspoText } from "./styled/Texts";
import { JoinButton } from "./buttons/JoinButton";
import Image from "next/image";

export const Hero = () => {
  return (
    <HeroContainer>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src={heroImg}
          alt="Man in a spacecraft on a desert planet"
          style={{ objectFit: "cover" }}
          layout="fill"
        />
      </div>
      <div
        style={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Image
          width={440}
          height={0}
          src={hubnetLogo}
          alt="hubnet logo"
          style={{ height: "auto" }}
        />
        <HeroInspoText>
          Inspirational text line here
          <br /> to engage user
        </HeroInspoText>
        <JoinButton />
      </div>
    </HeroContainer>
  );
};
