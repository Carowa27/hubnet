import { ButtonSecondary } from "../styled/Buttons";
import { LinkDefault, Paragraph } from "../styled/Texts";

interface Params {
  url: string;
}

export const WatchIntroductionButton = ({ url }: Params) => {
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
              Watch introduction
            </span>
          </Paragraph>
        </LinkDefault>
      </ButtonSecondary>
    </>
  );
};
