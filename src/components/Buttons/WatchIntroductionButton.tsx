interface YTBParam {
  url: string;
}

export const WatchIntroductionButton = ({ url }: YTBParam) => {
  return (
    <>
      <button
        // className="remove-corner"
        style={{
          border: "LightGray 2px solid",
          background: "none",
          padding: "10px",
          borderRadius: "10px",
          width: "100%",
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
            <span style={{ margin: "auto" }}> WATCH INTRODUCTION</span>
          </p>
        </a>
      </button>
    </>
  );
};
