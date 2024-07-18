import { Socials } from "@/models/Producer";
import discordlogo from "../../../public/assets/discord-logo.png";

interface SocialParams {
  socialType: Socials;
  url: string;
}

export const SocialButton = ({ socialType, url }: SocialParams) => {
  const logo = (socialType: Socials) => {
    switch (socialType) {
      case "Discord":
        return discordlogo.src;
    }
  };
  console.log("img link", logo, socialType);
  return (
    <>
      <button
        className="button-social"
        style={{
          borderRadius: "50%",
          height: "48px",
          width: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href={url} className="link-default" style={{ height: "20px" }}>
          <img
            src={logo(socialType)}
            alt={`${socialType} logo`}
            style={{ height: "20px", width: "auto" }}
          />
        </a>
      </button>
    </>
  );
};
