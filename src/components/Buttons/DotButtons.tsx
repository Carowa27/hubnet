interface DotParams {
  dotFunction: (i: number) => void;
  i: number;
}

export const FilledDot = ({ dotFunction, i }: DotParams) => {
  return (
    <>
      <span style={{ padding: "2px" }} onClick={() => dotFunction(i)}>
        &#11044;
      </span>
    </>
  );
};
export const Dot = ({ dotFunction, i }: DotParams) => {
  return (
    <>
      <span style={{ padding: "2px" }} onClick={() => dotFunction(i)}>
        &#9711;
      </span>
    </>
  );
};
