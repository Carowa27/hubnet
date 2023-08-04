import { Link } from "react-router-dom"
import { Show } from "../models/Show"

interface IShowsSmallProps {
    show: Show
}

export const ShowsSmall = ({show}: IShowsSmallProps) => {
    return (
        <div className="shows-small-container">
            <div className="shows-small-img-container">
                <img src={show.backgroundImg} alt="Image representing show" />
            </div>
            <div className="shows-small-container-content">
                <div className="shows-small-info">
                    <h5>{show.name}</h5>
                    <span>{show.shortDescription}</span>
                </div>
                <div className="shows-small-readmore">
                    <Link to={show.id}>Read more</Link>
                    <span className="material-symbols-outlined">keyboard_arrow_right</span>
                </div>
                <button className="btn-watch-videos">Watch videos</button>
            </div>
        </div>
    )
}