import { Socials } from "@/models/Producer";
import hubwireGalacticCharacter from "../../../public/assets/HubwireGalactic/hubwire-galactic-character.png";
import logo from "../../../public/assets/made-by-community-logo.png";
import tempBackground from "../../../public/assets/temporary-background-home.jpg";

/*-- PRODUCER --*/
export const ZarkMedia = {
  name: "Zark Media",
  description:
    "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  socialmedia: [
    { media: Socials.YOUTUBE, URL: "https://www.youtube.com/@ZarkMedia" },
    {
      media: Socials.PATREON,
      URL: "https://www.patreon.com/zarkmedia",
    },
  ],
  cutout: hubwireGalacticCharacter.src,
  logo: logo.src,
};

/*-- SHOWS --*/
export const HubwireGalactic = {
  id: "1",
  name: "Hubwire Galactic",
  producer: ZarkMedia,
  description:
    "An on-going, narrative look at the real-life adventures of OVERCLOCKED star, Ava Huxley",
  backgroundImg: tempBackground.src,
  playlistURL:
    "https://www.youtube.com/playlist?list=PLxwkX_IXK1UYmGVTSjuMIPnJX8p9vBcqW",
};
