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
        <a href={url}>
          <span>"[]"</span>
          <span>WATCH ON YOUTUBE</span>
        </a>
      </section>
    </>
  );
};
