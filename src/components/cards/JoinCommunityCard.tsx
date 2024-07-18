import { JoinUsButton } from "../buttons/JoinButton";

export const JoinCommunityCard = () => {
  return (
    <>
      <article
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid lightGray",
          padding: "15px",
          borderRadius: "10px",
          width: "auto",
          maxWidth: "350px",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ margin: "0" }}>JOIN OUR COMMUNITY</h3>
          <p>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <JoinUsButton />
        </section>
      </article>
    </>
  );
};
