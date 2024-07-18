import discordLogo from "../../../public/assets/discord-logo.png";
import { ButtonJoinUs } from "../styled/Buttons";
import { LinkDefault, Paragraph } from "../styled/Texts";

export const JoinUsButton = () => {
  return (
    <>
      <ButtonJoinUs>
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
      </ButtonJoinUs>
    </>
  );
};
