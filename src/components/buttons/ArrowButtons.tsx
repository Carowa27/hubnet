import { ButtonArrow } from "../styled/Buttons";
import { ArrowIcon } from "../styled/Texts";

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
      <ButtonArrow
        disabled={start === 0}
        onClick={() => arrowFunction()}
        style={{ margin: "10px" }}
      >
        {/* TODO: look up on mozilla,chrome & edge */}
        <ArrowIcon>&#706;</ArrowIcon>
      </ButtonArrow>
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
      <ButtonArrow
        disabled={end === lastIndex}
        onClick={() => arrowFunction()}
        style={{ margin: "10px" }}
      >
        {/* TODO: look up on mozilla,chrome & edge */}
        <ArrowIcon>&#707;</ArrowIcon>
      </ButtonArrow>
    </>
  );
};
