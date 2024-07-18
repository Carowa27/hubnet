interface YTBParam {
  url: string;
}

export const YoutubeWatchButton = ({ url }: YTBParam) => {
  return (
    <>
      <button
        className="button-watch"
        style={{
          padding: "10px",
          width: "auto",
          borderRadius: "10px",
        }}
      >
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
      </button>
    </>
  );
};
