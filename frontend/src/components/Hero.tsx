import { HeroContainer } from "./styled/Containers";
import heroImg from "../../public/assets/temporary-background-home.jpg";
import hubnetLogo from "../../public/assets/hubnet-white-logo.png";
import { HeroInspoText } from "./styled/Texts";
import { JoinButton } from "./buttons/JoinButton";
import Image from "next/image";

export const Hero = () => {
  return (
    <HeroContainer $bgimg={heroImg.src}>
      <Image width={440} height={280} src={hubnetLogo.src} alt="hubnet logo" />
      <HeroInspoText style={{ marginTop: "10px", marginBottom: "10px" }}>
        Inspirational text line here to engage user
      </HeroInspoText>
      <JoinButton />
    </HeroContainer>
  );
};
