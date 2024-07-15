"use client";
import { useState } from "react";
import { ArrowLeftButton, ArrowRightButton, Dot, FilledDot } from "./Buttons";
import { ShowCard } from "./Cards";
import { HubwireGalactic } from "@/data/newly created files/ZarkMedia";
import { Shows } from "@/data/Shows";

interface ShowCarouselParams {
  homePage: boolean;
}

export const ShowCarousel = ({ homePage }: ShowCarouselParams) => {
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
    <div style={{ display: "flex", justifyContent: "center" }}>
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
            gap: "10px",
            display: "flex",
            justifyContent: "space-evenly",
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
            gridColumn: "2/9",
            gridRow: "2",
            display: "flex",
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

export const ProdLogoCarousel = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const rotateFunction = () => {};
  return (
    <>
      <section>
        <div style={{ display: "flex", alignItems: "center" }}>
          {Shows.map((show, i) => {
            if (i >= start && i <= end) {
              return i === start || i === end ? (
                //0 & 4
                <div
                  key={i}
                  style={{
                    boxShadow: "0px 0px 5px 0px #5495D5",
                    border: "1px solid #5495D5",
                    borderRadius: "10px",
                    aspectRatio: "1/1",
                    width: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  <img
                    style={{
                      aspectRatio: "1/1",
                      width: "40px",
                    }}
                    src={show.producer.logo}
                    alt={`${show.name} logo`}
                  />
                </div>
              ) : i === start + 1 || i === end - 1 ? (
                //1 & 3
                <div
                  key={i}
                  style={{
                    boxShadow: "0px 0px 5px 0px #5495D5",
                    border: "1px solid #5495D5",
                    borderRadius: "10px",
                    aspectRatio: "1/1",
                    width: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  <img
                    style={{
                      aspectRatio: "1/1",
                      width: "60px",
                    }}
                    src={show.producer.logo}
                    alt={`${show.name} logo`}
                  />
                </div>
              ) : (
                //2 (center)
                <div
                  key={i}
                  style={{
                    boxShadow: "0px 0px 5px 0px lightGray",
                    border: "1px solid lightGray",
                    borderRadius: "10px",
                    aspectRatio: "1/1",
                    width: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  <img
                    style={{
                      aspectRatio: "1/1",
                      width: "80px",
                    }}
                    src={show.producer.logo}
                    alt={`${show.name} logo`}
                  />
                </div>
              );
            } else return;
          })}
        </div>
      </section>
    </>
  );
};

////
