import { Socials } from "@/models/Producer";
import discordlogo from "../../../public/assets/discord-logo.png";
import { ButtonSocial } from "../styled/Buttons";
import { LinkDefault } from "../styled/Texts";
import Image from "next/image";

interface SocialParams {
  socialType: Socials;
  url: string;
}

export const SocialButton = ({ socialType, url }: SocialParams) => {
  //  TODO add more cases and a default
  const logo = (socialType: Socials) => {
    switch (socialType) {
      case "Discord":
        return discordlogo.src;
    }
    return "";
  };
  return (
    <>
      <ButtonSocial>
        <LinkDefault href={url} style={{ height: "20px" }}>
          <Image
            height={20}
            width={20}
            src={logo(socialType)}
            alt={`${socialType} logo`}
            style={{ height: "20px", width: "auto" }}
          />
        </LinkDefault>
      </ButtonSocial>
    </>
  );
};
