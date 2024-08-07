"use client";
import { useState } from "react";
import { Dot, FilledDot } from "../buttons/DotButtons";
import { ArrowLeftButton, ArrowRightButton } from "../buttons/ArrowButtons";
import { ShowCard } from "../cards/ShowCard";
import { Shows } from "@/data/Shows";

interface ShowsCarouselParams {
  homePage: boolean;
}

export const ShowsCarousel = ({ homePage }: ShowsCarouselParams) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);
  const arrowLFunction = () => {
    if (start !== 0) {
      setStart(start - 3);
      setEnd(end - 3);
    } else return;
  };

  const arrowRFunction = () => {
    if (end !== Shows.length) {
      setStart(start + 3);
      setEnd(end + 3);
    } else return;
  };
  const dotFunction = (i: number) => {
    setStart(Math.ceil(i * 3)), setEnd(Math.ceil(i * 3 + 2));
  };

  const totalDots = Math.ceil(Shows.length / 3);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "15px",
        paddingTop: "15px",
      }}
    >
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9,1fr)",
          gap: "10px",
          gridAutoRows: "minmax(10px, auto)",
          width: "75%",
        }}
      >
        <div
          style={{
            gridColumn: "1",
            gridRow: "1",
            display: "flex",
            justifyContent: "right",
            alignSelf: "center",
          }}
        >
          <ArrowLeftButton arrowFunction={arrowLFunction} start={start} />
        </div>
        <div
          style={{
            gridColumn: "2/9",
            gridRow: "1",
            gap: "15px",
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        >
          {Shows.map((show, i) => {
            if (i >= start && i <= end) {
              return <ShowCard key={i} show={show} homePage={homePage} />;
            } else return;
          })}
        </div>
        <div
          style={{
            gridColumn: "9",
            gridRow: "1",
            display: "flex",
            justifyContent: "left",
            alignSelf: "center",
          }}
        >
          <ArrowRightButton
            arrowFunction={arrowRFunction}
            end={end}
            lastIndex={Shows.length - 1}
          />
        </div>
        <div
          style={{
            marginTop: "10px",
            gridColumn: "2/9",
            gridRow: "2",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: totalDots }).map((_, i) => {
            const isInRange =
              Math.ceil(i * 3 + 2) >= start && Math.ceil(i * 3 + 2) <= end;
            return isInRange ? (
              <FilledDot key={i} dotFunction={dotFunction} i={i} />
            ) : (
              <Dot key={i} dotFunction={dotFunction} i={i} />
            );
          })}
        </div>
      </section>
    </div>
  );
};
