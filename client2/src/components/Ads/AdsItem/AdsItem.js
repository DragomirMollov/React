import { Link } from "react-router-dom";
import './adsItem.scss'

export const AdsItem = ({
    _id,
    title,
    category,
    imageUrl,
}) => {
    return (
        <div className="allAds">
            <div className="allAds-info">
                <img src={imageUrl} alt=""/>
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/ads/${_id}`} className="details-button">Details</Link>
            </div>
        </div>

        
    );
}