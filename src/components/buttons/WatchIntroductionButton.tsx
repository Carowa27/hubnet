interface Params {
  url: string;
}

export const WatchIntroductionButton = ({ url }: Params) => {
  return (
    <>
      <button
        className="button-intro"
        style={{
          padding: "10px",
          width: "auto",
          borderRadius: "10px",
        }}
      >
        <a href={url} style={{ color: "#ffffff" }} className="link-default">
          <p
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
          </p>
        </a>
      </button>
    </>
  );
};
