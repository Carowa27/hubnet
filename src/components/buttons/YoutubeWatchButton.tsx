import { color } from "@/utils/colors";
import { ButtonSecondary } from "../styled/Buttons";
import { LinkDefault, Paragraph } from "../styled/Texts";

interface YTBParam {
  url: string;
}

export const YoutubeWatchButton = ({ url }: YTBParam) => {
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
            }}
          >
            <span
              style={{
                paddingRight: "30px",
                color: `${color.red}`,
              }}
            >
              Watch now
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
