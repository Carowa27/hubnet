interface YTBParam {
  url: string;
}

export const YoutubeWatchButton = ({ url }: YTBParam) => {
  return (
    <>
      <section
        style={{
          border: "LightGray 1px solid",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <a href={url} style={{ color: "#ffffff" }}>
          <p
            style={{
              margin: "0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              {`[`} &gt; {`] `}
            </span>
            <span style={{ margin: "auto" }}> WATCH ON YOUTUBE</span>
          </p>
        </a>
      </section>
    </>
  );
};
