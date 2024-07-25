import { YoutubeWatchButton } from "../buttons/YoutubeWatchButton";
import logo from "../../../public/assets/made-by-community-logo.png";
import { Show } from "@/models/Show";
import { color } from "@/utils/colors";

interface ShowCardParams {
  show: Show;
  homePage: boolean;
}

export const ShowCard = ({ show, homePage }: ShowCardParams) => {
  return (
    <>
      <article
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: `${homePage ? "space-between" : "end"}`,
          padding: `${homePage ? "10px 20px" : "10px 15px"}`,
          borderRadius: "10px",
          width: `${homePage ? "350px" : "281px"}`,
          height: `${homePage ? "310px" : "245px"}`,
          backgroundImage: `url(${show.backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {homePage && (
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "10px",
              gridAutoRows: "minmax(10px, auto)",
            }}
          >
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
              <img
                style={{ aspectRatio: "1/1", width: "42px" }}
                src={logo.src}
                alt={`${show.name} logo`}
              />
            </div>
          </section>
        )}
        <section>
          <h3
            style={{
              fontSize: "20px",
              textTransform: "uppercase",
            }}
            className={`${
              homePage ? "show-card-title-producer" : "show-card-title"
            }`}
          >
            {show.name}
          </h3>
          <p
            style={{ margin: 0, paddingBottom: "10px", fontSize: "14px" }}
            className={`${homePage ? "" : "show-card-hover"}`}
          >
            {show.description}
          </p>
          <section className="show-card-hover">
            <YoutubeWatchButton url={show.playlistURL} />
          </section>
        </section>
      </article>
    </>
  );
};
