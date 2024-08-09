import { color } from "@/utils/colors";
import discordLogo from "/public/assets/icons/discord.svg";
import { ButtonSecondary } from "../styled/Buttons";
import { LinkDefault, Paragraph } from "../styled/Texts";
import Image from "next/image";

export const JoinButton = () => {
  return (
    <>
      <ButtonSecondary
        $bgcolor={`none`}
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
            <Image
              width={0}
              height={24}
              priority={true}
              src={discordLogo}
              alt="discord logo"
              style={{ width: "auto" }}
            />
            <span
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                color: color.white,
              }}
            >
              Join our discord
            </span>
          </Paragraph>
        </LinkDefault>
      </ButtonSecondary>
    </>
  );
};
