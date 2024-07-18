interface ArrowLParams {
  arrowFunction: () => void;
  start: number;
}
interface ArrowRParams {
  arrowFunction: () => void;
  end: number;
  lastIndex: number;
}

export const ArrowLeftButton = ({ arrowFunction, start }: ArrowLParams) => {
  return (
    <>
      <button
        disabled={start === 0}
        style={{
          height: "36px",
          aspectRatio: "1/1",
          background: `${
            start === 0
              ? "rgba(63,68,84,0.3)"
              : "linear-gradient(#2B3452, #191F2E)"
          }`,
          border: "none",
          borderRadius: "10px",
          color: `${
            start === 0 ? "rgba(255,255,255,0.3)" : "rgb(255,255,255)"
          }`,
        }}
        onClick={() => arrowFunction()}
      >
        {/* TODO: look up on mozilla,chrome & edge */}
        <p
          style={{
            fontSize: "36px",
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &#706;
        </p>
      </button>
    </>
  );
};
export const ArrowRightButton = ({
  arrowFunction,
  end,
  lastIndex,
}: ArrowRParams) => {
  return (
    <>
      <button
        disabled={end === lastIndex}
        style={{
          height: "36px",
          aspectRatio: "1/1",
          background: `${
            end === lastIndex
              ? "rgba(63,68,84,0.3)"
              : "linear-gradient(#2B3452, #191F2E)"
          }`,
          border: "none",
          borderRadius: "10px",
          color: `${
            end === lastIndex ? "rgba(255,255,255,0.3)" : "rgb(255,255,255)"
          }`,
        }}
        onClick={() => arrowFunction()}
      >
        {/* TODO: look up on mozilla,chrome & edge */}
        <p
          style={{
            fontSize: "36px",
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &#707;
        </p>
      </button>
    </>
  );
};