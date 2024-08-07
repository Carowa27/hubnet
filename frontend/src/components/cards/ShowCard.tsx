import { YoutubeWatchButton } from "../buttons/YoutubeWatchButton";
import logo from "../../../public/assets/made-by-community-logo.png";
import { Show } from "@/models/Show";
import { color } from "@/utils/colors";
import { CardSectionShow, CardShow } from "../styled/Cards";
import { H3, ShowCardParagraph } from "../styled/Texts";
import Image from "next/image";

interface ShowCardParams {
  show: Show;
  homePage: boolean;
}

export const ShowCard = ({ show, homePage }: ShowCardParams) => {
  return (
    <>
      <CardShow className="card" $home={true}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Image
            src={show.backgroundImg}
            alt={show.name}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
            layout="fill"
          />
        </div>
        {homePage && (
          <CardSectionShow>
            <div
              className="show-card-hover"
              style={{ gridColumn: "1/3", marginTop: "10px" }}
            >
              <h4
                style={{
                  margin: 0,
                  marginBottom: "0",
                  color: `${color.paragraphColor}`,
                }}
              >
                PRODUCED BY
              </h4>
              <h4
                style={{
                  margin: 0,
                  marginBottom: "5px",
                }}
              >
                {show.producer.name} <span>&gt;</span>
              </h4>
            </div>
            <div style={{ gridColumn: "3", textAlign: "right" }}>
              <Image
                width={42}
                height={0}
                style={{ aspectRatio: "1/1", width: "42px", height: "auto" }}
                src={logo.src}
                alt={`${show.name} logo`}
              />
            </div>
          </CardSectionShow>
        )}
        <section style={{ zIndex: 1 }}>
          <H3
            className={`${
              homePage ? "show-card-title-producer" : "show-card-title"
            }`}
          >
            {show.name}
          </H3>
          <ShowCardParagraph
            style={{ margin: 0, paddingBottom: "10px" }}
            className={`${homePage ? "" : "show-card-hover"}`}
          >
            {show.description}
          </ShowCardParagraph>
          <section className="show-card-hover">
            <YoutubeWatchButton url={show.playlistURL} />
          </section>
        </section>
      </CardShow>
    </>
  );
};
