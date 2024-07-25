import { AboutUsCard } from "@/components/cards/AboutUsCard";
import { JoinCommunityCard } from "@/components/cards/JoinCommunityCard";
import { ShowsCarousel } from "@/components/carousels/ShowsCarousel";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <article>
      <Hero />
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9,1fr)",
          gap: "10px",
          gridAutoRows: "minmax(10px, auto)",
        }}
      >
        <h1
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            gridColumn: "5",
            textTransform: "uppercase",
          }}
        >
          Our shows
        </h1>
        <div style={{ gridColumn: "1/10" }}>
          <ShowsCarousel homePage={true} />
        </div>
        <div
          style={{
            gridColumn: "2/9",
            gap: "15px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "15px",
            marginRight: "15px",
            marginBottom: "15px",
          }}
        >
          <AboutUsCard />
          <JoinCommunityCard />
        </div>
      </section>
    </article>
  );
}
