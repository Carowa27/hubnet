import { color } from "@/utils/colors";
import { ConnectOnDiscordButton } from "../buttons/ConnectOnDiscordButton";
import hubnetLogo from "../../../public/assets/hubnet-white-logo.png";
import { H3, Paragraph } from "../styled/Texts";

export const AboutUsCard = () => {
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
          width: "720px",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <H3 style={{ marginBottom: "20px", marginTop: "10px" }}>ABOUT US</H3>
          <Paragraph style={{ width: "520px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Paragraph>
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <h4 style={{ marginBottom: "20px", marginTop: "20px" }}>
                OUR PRODUCERS &gt;
              </h4>
              <ConnectOnDiscordButton />
            </div>
            <div>
              <img
                src={hubnetLogo.src}
                alt="Hubnet Logo"
                style={{ width: "151px", height: "auto", opacity: "10%" }}
              />
            </div>
          </section>
        </section>
      </article>
    </>
  );
};
