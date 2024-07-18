import { color } from "@/utils/colors";
import { ButtonSecondary } from "../styled/Buttons";
import { LinkDefault, Paragraph } from "../styled/Texts";

interface Params {
  url: string;
}

export const WatchIntroductionButton = ({ url }: Params) => {
  return (
    <>
      <ButtonSecondary
        $bgcolor={color.darkBlue50Opacity}
        $border={`1px solid ${color.buttonWhiteBackground}`}
        $color={color.white}
      >
        <LinkDefault href={url}>
          <Paragraph
            style={{
              margin: "0",
            }}
          >
            <span>
              {`[`} &gt; {`] `}
            </span>
            <span style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              Watch introduction
            </span>
          </Paragraph>
        </LinkDefault>
      </ButtonSecondary>
    </>
  );
};
