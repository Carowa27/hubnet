import { color } from "@/utils/colors";
import { JoinButton } from "../buttons/JoinButton";
import { H3, Paragraph } from "../styled/Texts";
import { WatchIntroductionButton } from "../buttons/WatchIntroductionButton";

export const JoinCommunityCard = () => {
  return (
    <>
      <article
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: color.backgroundCardHome,
          padding: "15px 20px",
          borderRadius: "10px",
          width: "365px",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <H3 style={{ marginBottom: "20px", marginTop: "10px" }}>
            JOIN OUR COMMUNITY
          </H3>
          <Paragraph style={{ marginBottom: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </Paragraph>
          <WatchIntroductionButton url={""} />
        </section>
      </article>
    </>
  );
};
