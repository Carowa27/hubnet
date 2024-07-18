import { ButtonSecondary } from "../Styled/Buttons";

interface YTBParam {
  url: string;
}

export const YoutubeWatchButton = ({ url }: YTBParam) => {
  return (
    <>
      <ButtonSecondary>
        <a href={url} className="link-default">
          <p
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
          </p>
        </a>
      </ButtonSecondary>
    </>
  );
};
