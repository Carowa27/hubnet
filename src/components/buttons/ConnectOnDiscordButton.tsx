import { ButtonConnect } from "../styled/Buttons";
import { Paragraph } from "../styled/Texts";

export const ConnectOnDiscordButton = () => {
  return (
    <>
      <ButtonConnect>
        <Paragraph
          style={{
            margin: "0",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Connect on discord
        </Paragraph>
      </ButtonConnect>
    </>
  );
};
