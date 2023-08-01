import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [showShowsMenu, setShowShowsMenu] = useState(false);
return (
    <>
        <div className="header-menu">
            <div className="header-menu-content">
                <Link className="home-button" to="/">Hubnet</Link>
                <div className="header-menu-options">
                    <div
                    className="menu-link menu-show-container"
                    onClick={() => {
                    setShowShowsMenu(!showShowsMenu);
                    }}
                    >
                    <div className="shows-title"><span>Shows</span></div>
                    
                        <div id="arrows">
                        {!showShowsMenu ? <span className="material-symbols-outlined">keyboard_arrow_down</span> : <span className="material-symbols-outlined">keyboard_arrow_up</span>}
                        </div>
                    </div>
                    <div className="menu-divider" />
                    <Link className="menu-link" to="/producers">Producers</Link>
                    <div className="menu-divider" />
                    <Link className="menu-link" to="/community">Get connected</Link>
                    <div className="menu-divider" />
                    <Link className="menu-link" to="/faq">FAQ</Link>
                </div>
            </div>
            {showShowsMenu && (
            <div className="menu-shows">
                <div className="menu-shows-container">  
                    <div className="show-choice">Ava IRL</div>
                    <div className="show-choice">Chronicles of Stanton</div>
                    <div className="show-choice">Emergence</div>
                    <div className="show-choice">Guidance</div>
                </div>
                <div className="menu-divider" />
                <div className="menu-shows-container">
                    <div className="show-choice">Hubwire Galactic</div>
                    <div className="show-choice">JACK! of Spades</div>
                    <div className="show-choice">OnTrack</div>
                    <div className="show-choice">OVERCLOCKED</div>
                </div>
                <div className="menu-divider" />
                <div className="menu-shows-container">
                    <div className="show-choice">Piracy and the Industrial Worker</div>
                    <div className="show-choice">Red Line</div>
                    <div className="show-choice">The Spin</div>
                    <div className="show-choice">The 'Verse View</div>
                </div>
            </div>
        )}
        </div>
        </>
    )
}