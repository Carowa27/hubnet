import { color } from "@/utils/colors";
import discordLogo from "../../../public/assets/discord-logo.png";
import { ButtonSecondary } from "../styled/Buttons";
import { LinkDefault, Paragraph } from "../styled/Texts";

export const JoinButton = () => {
  return (
    <>
      <ButtonSecondary
        $bgcolor={color.background}
        $border={`1px solid ${color.buttonWhiteBackground}`}
        $color={color.white}
      >
        <LinkDefault href="">
          <Paragraph
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={discordLogo.src}
              alt="discord logo"
              style={{ height: "24px", width: "auto" }}
            />
            <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              Join us now
            </span>
          </Paragraph>
        </LinkDefault>
      </ButtonSecondary>
    </>
  );
};
