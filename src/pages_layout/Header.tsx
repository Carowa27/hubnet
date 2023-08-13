import { useParams } from "react-router-dom";
import { Menu } from "../components/Menu";
import {Shows} from "../data/Shows";
import { HeaderTitle } from "../components/styled/HeaderStyled";
import hubnetLogo from "../assets/hubnet-white.png";
import backgroundVideo from "../assets/temporary-video.mp4";



export const Header = () => {
  const params = useParams();
  const show = Shows.find(s => s.id === params.showsid);


  return (
    <>
    {show && (
      <>
        <HeaderTitle color={show.color}>
          <h1 className="header-title">{show.name}</h1>
        </HeaderTitle>
      </>
    )}
    {!show && (
      <div className="header-container">
      <div className="hubnet-logo-container">
        <img src={hubnetLogo} alt="Hubnet Logo" />
      </div>
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
    </div>
    )}
    <Menu />
    </>
  );
};
