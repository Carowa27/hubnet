"use client";
import { useState } from "react";
import { Shows } from "@/data/Shows";
import Image from "next/image";

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
                  <Image
                    width={40}
                    height={40}
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
                  <Image
                    width={60}
                    height={60}
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
                  <Image
                    width={80}
                    height={80}
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
