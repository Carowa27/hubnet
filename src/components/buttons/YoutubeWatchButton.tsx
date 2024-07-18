import { ButtonSecondary } from "../styled/Buttons";
import { LinkDefault, Paragraph } from "../styled/Texts";

interface YTBParam {
  url: string;
}

export const YoutubeWatchButton = ({ url }: YTBParam) => {
  return (
    <>
      <ButtonSecondary>
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
              Watch on Youtube
            </span>
          </Paragraph>
        </LinkDefault>
      </ButtonSecondary>
    </>
  );
};
