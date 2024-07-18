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
        className="button-arrow"
        disabled={start === 0}
        style={{
          height: "36px",
          aspectRatio: "1/1",
          border: "none",
          borderRadius: "10px",
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
        className="button-arrow"
        disabled={end === lastIndex}
        style={{
          height: "36px",
          aspectRatio: "1/1",

          border: "none",
          borderRadius: "10px",
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
