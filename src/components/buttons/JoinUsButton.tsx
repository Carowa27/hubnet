import discordLogo from "../../../public/assets/discord-logo.png";

export const JoinUsButton = () => {
  return (
    <>
      <button
        className="button-join-us"
        style={{
          padding: "10px",
          width: "auto",
          borderRadius: "10px",
        }}
      >
        <a href="" className="link-default">
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={discordLogo.src}
              alt="discord logo"
              style={{ height: "24px", width: "auto" }}
            />
            <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              Join us now
            </span>
          </p>
        </a>
      </button>
    </>
  );
};
