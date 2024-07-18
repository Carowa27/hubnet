import { color } from "@/utils/colors";
import { ButtonSecondary } from "../styled/Buttons";
import { Paragraph } from "../styled/Texts";

export const ConnectOnDiscordButton = () => {
  return (
    <>
      <ButtonSecondary
        $bgcolor={color.buttonWhiteBackground}
        $border="none"
        $color={color.background}
      >
        <Paragraph
          style={{
            margin: "0",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Connect on discord
        </Paragraph>
      </ButtonSecondary>
    </>
  );
};
