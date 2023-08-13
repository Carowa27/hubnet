import { useParams } from "react-router-dom";
import {Shows} from "../data/Shows";
import { PlayBtn, YoutubeContainer } from "../components/styled/Youtube";
import { HeaderContainer } from "../components/styled/HeaderStyled";
import { WatchVideoBtn } from "../components/styled/Button";

export const Show = () => {
const params = useParams();
const show = Shows.find(s => s.id === params.showsid);

const goTooChannel = () => {
  if (show) {
    window.location.replace(show.channelURL);
  }
}

  return (
    <div className="show-content">
      <HeaderContainer backgroundimage={show?.backgroundImg} />
      <div className="show-content-first-section">
        <div className="show-text-container">
          <div className="show-title-container">
            <h2>{show?.title}</h2>
          </div>
          <p>{show?.description}</p>
        </div>
        <div className="show-youtube-section">
          <YoutubeContainer color={show?.color} backgroundimage={show?.backgroundImg}>
            <PlayBtn color={show?.color} textcolor={show?.textcolor}>
              <div id="arrows">
                <span className="material-symbols-outlined">keyboard_arrow_right</span>
              </div>
            </PlayBtn>  
          </YoutubeContainer>
          <div className="show-youtube-character-container">
            <img src={show?.characterImg} />
          </div>
        </div>
      </div>
      <div className="show-content-second-section">
        <div className="show-produced-by-container">
          <div className="show-produced-by-text">
            <span>Produced by</span>
            <h4 className="show-produced-by-name">{show?.name}</h4>
            <span className="material-symbols-outlined">keyboard_arrow_right</span>
          </div>
          <WatchVideoBtn color={show?.color} textcolor={show?.textcolor} onClick={goTooChannel}>Watch videos</WatchVideoBtn>
        </div>
      </div>
    </div>
  );
};
