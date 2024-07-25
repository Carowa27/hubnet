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
        $bgcolor={`none`}
        $border={`none`}
        $color={color.white}
        style={{ paddingLeft: 0 }}
      >
        <LinkDefault href={url}>
          <Paragraph
            style={{
              margin: "0",
              fontSize: "20px",
              display: "flex",
              alignItems: "start",
            }}
          >
            <span
              style={{
                paddingRight: "30px",
                color: `${color.red}`,
                textTransform: "capitalize",
              }}
            >
              Watch introduction
            </span>
            <span>
              {`[`} &gt; {`] `}
            </span>
          </Paragraph>
        </LinkDefault>
      </ButtonSecondary>
    </>
  );
};
