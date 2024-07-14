import { YoutubeWatchButton } from "./Buttons";
import logo from "../../public/assets/made-by-community-logo.png";
import { Show } from "@/models/Show";

interface SOFCardParams {
  show: Show;
}

export const ShowsOnFrontPageCard = ({ show }: SOFCardParams) => {
  return (
    <>
      <section
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px",
          borderRadius: "10px",
          width: "353px",
          height: "308px",
          backgroundImage: `url(${show.backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "10px",
            gridAutoRows: "minmax(100px, auto)",
          }}
        >
          <div className="showOnHover" style={{ gridColumn: "1" }}>
            <h4>PRODUCER</h4>
            <h5>{show.producer.name}</h5>
            <p>Read more &gt;</p>
          </div>
          <div style={{ gridColumn: "3", textAlign: "right" }}>
            <img
              style={{ aspectRatio: "1/1", width: "40px" }}
              src={logo.src}
              alt={`${show.name} logo`}
            />
          </div>
        </div>
        <div>
          <h3>{show.name}</h3>
          <p>{show.description}</p>
        </div>
        <div className="showOnHover">
          <YoutubeWatchButton url={show.playlistURL} />
        </div>
      </section>
    </>
  );
};
