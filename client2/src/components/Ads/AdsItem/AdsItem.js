import { Link } from "react-router-dom";
import './adsItem.scss'

export const AdsItem = ({
    _id,
    title,
    category,
    imageUrl,
    price,
    phone,
    description,
    location,
    email,
    condition
}) => {
    return (
        <div className="allAds">
            <div className="allAds-info">
                <img src={imageUrl} alt=""/>
                <h6>{category}</h6>
                <h2>{title}</h2>
                <div><p>{price}</p>
                <p>{phone}</p>
                <p>{description}</p>
                <p>{location}</p>
                <p>{email}</p>
                <p>{condition}</p></div>
                <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
            </div>
        </div>

        
    );
}