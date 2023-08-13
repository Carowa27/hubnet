import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [showShowsMenu, setShowShowsMenu] = useState(false);
return (
    <>
        <div className="header-menu">
            <div className="header-menu-home-banner">
                <Link className="home-button" to="/"><h1>Hubnet</h1></Link>
            </div>
            <div className="header-menu-options-banner">
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
            <div className="menu-shows-content">
                <div className="menu-shows">
                    <div className="menu-shows-container">  
                        <Link className="show-choice" to="/AvaIRL">Ava IRL</Link>
                        <Link className="show-choice" to="/ChroniclesofStanton">Chronicles of Stanton</Link>
                        <Link className="show-choice" to="/Emergence">Emergence</Link>
                        <Link className="show-choice" to="/Guidance">Guidance</Link>
                        <Link className="show-choice" to="/HubwireGalactic">Hubwire Galactic</Link>
                        <Link className="show-choice" to="/JACKofSpades">JACK! of Spades</Link>
                    </div>
                    <div className="menu-divider" />
                    <div className="menu-shows-container">
                        <Link className="show-choice" to="/OnTrack">OnTrack</Link>
                        <Link className="show-choice" to="/OVERCLOCKED">OVERCLOCKED</Link>
                        <Link className="show-choice" to="/PiracyandtheIndustrialWorker">Piracy and the Industrial Worker</Link>
                        <Link className="show-choice" to="/RedLine">Red Line</Link>
                        <Link className="show-choice" to="/TheSpin">The Spin</Link>
                        <Link className="show-choice" to="/TheVerseView">The 'Verse View</Link>
                    </div>
                </div>
            </div>
        )}
        </div>
        </>
    )
}