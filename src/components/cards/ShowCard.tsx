import { YoutubeWatchButton } from "../buttons/YoutubeWatchButton";
import logo from "../../../public/assets/made-by-community-logo.png";
import { Show } from "@/models/Show";

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
          padding: "10px 15px",
          borderRadius: "10px",
          width: `${homePage ? "auto" : "281px"}`,
          maxWidth: "350px",
          height: `${homePage ? "250px" : "245px"}`,
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
            <div className="show-card-hover" style={{ gridColumn: "1" }}>
              <h4 style={{ margin: 0, marginBottom: "5px" }}>PRODUCER</h4>
              <h4
                style={{
                  margin: 0,
                  marginBottom: "5px",
                  color: "#326BD9",
                }}
              >
                {show.producer.name}
              </h4>
              <p style={{ margin: 0, marginBottom: "10px", color: "#326BD9" }}>
                Read more &gt;
              </p>
            </div>
            <div style={{ gridColumn: "3", textAlign: "right" }}>
              <img
                style={{ aspectRatio: "1/1", width: "40px" }}
                src={logo.src}
                alt={`${show.name} logo`}
              />
            </div>
          </section>
        )}
        <section>
          <h3 style={{ margin: 0, marginBottom: "0px", fontSize: "20px" }}>
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
