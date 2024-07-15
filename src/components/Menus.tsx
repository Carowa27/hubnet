import discordLogo from "../../public/assets/discord-logo.png";

export const DiscordOnlyMenu = () => {
  return (
    <>
      <section
        style={{
          border: "1px white solid",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <img
          src={discordLogo.src}
          alt="Discord Logo"
          style={{
            height: "30px",
          }}
        />
      </section>
    </>
  );
};

export const DiscordAndProdMenu = () => {
  return (
    <>
      <section
        style={{
          border: "1px white solid",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "250px",
          paddingRight: "10px",
          paddingLeft: "20px",
          paddingBottom: "15px",
          paddingTop: "15px",
        }}
      >
        <span>PRODUCERS</span>
        <img
          src={discordLogo.src}
          alt="Discord Logo"
          style={{
            height: "30px",
          }}
        />
      </section>
    </>
  );
};
