import Image from "next/image";
import discordLogo from "../../public/assets/icons/discord.svg";

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
        <Image
          width={53}
          height={0}
          src={discordLogo.src}
          alt="Discord Logo"
          style={{
            height: "auto",
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
        <Image
          width={53}
          height={0}
          src={discordLogo.src}
          alt="Discord Logo"
          style={{
            height: "auto",
          }}
        />
      </section>
    </>
  );
};
