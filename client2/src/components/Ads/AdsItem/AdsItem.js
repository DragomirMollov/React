import { Link } from "react-router-dom";

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
        <div className="card">
            <div className="card-header">
                <img src={imageUrl} alt=""/>
                <h6>{category}</h6>
                <h2 className="card-title">{title}</h2>
                <Link to={`/catalog/${_id}`} className="details-button card-description">Details</Link>
            </div>
        </div>
    );
}