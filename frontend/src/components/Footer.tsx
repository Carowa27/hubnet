import madeByCommunity from "/public/assets/made-by-community-logo.png";
import hubnetLogo from "/public/assets/hubnet-white.png";
import starCitizenLogo from "/public/assets/STARCITIZEN_WHITE.webp";
import discordLogo from "/public/assets/icons/discord.svg";
import Image from "next/image";
import {
  FooterLargeLogoWrapper,
  FooterSmallLogoWrapper,
} from "./styled/Images";
import { FooterParagraph } from "./styled/Texts";
import { FooterContainer } from "./styled/Containers";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterSmallLogoWrapper>
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
        </FooterSmallLogoWrapper>
        <span>PRODUCERS</span>
        <FooterSmallLogoWrapper>
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
        </FooterSmallLogoWrapper>
      </div>
      <FooterParagraph>
        The videos on this website are non-commercial fan productions. Star
        Citizen, Squadron 42, and all related marks, logos and characters are
        solely owned by Cloud Imperium Rights, LLC and/or Cloud Imperium Rights
        Ltd. This fan production is not endorsed by, sponsored by, or affiliated
        with Cloud Imperium Group. No commercial exploitation, exhibition, or
        distribution is permitted. No alleged independent rights may be asserted
        against Cloud Imperium or its affiliates.
      </FooterParagraph>
      <div>
        <FooterLargeLogoWrapper>
          <Image
            src={madeByCommunity}
            alt="Made By Community Logo"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
              position: "absolute",
            }}
          />
        </FooterLargeLogoWrapper>
        <FooterLargeLogoWrapper>
          <Image
            src={starCitizenLogo}
            alt="Star Citizen Logo"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
              position: "absolute",
            }}
          />
        </FooterLargeLogoWrapper>
      </div>
    </FooterContainer>
  );
};
