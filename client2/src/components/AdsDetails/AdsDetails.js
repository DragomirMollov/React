import { useEffect, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { adsServiceFactory } from '../../services/adsService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from './addComemnt/AddComment';
import { adsReducer } from '../../reducers/adsReducer';
import { useAdsContext } from '../../contexts/AdsContext';

export const AdsDetails = () => {
    const { adsId } = useParams();
    const { userId, isAuthenticated, userEmail, userName } = useAuthContext();
    const { deleteAds } = useAdsContext();
    const [ads, dispatch] = useReducer(adsReducer, {});
    const adsService = useService(adsServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            adsService.getOne(adsId),
            commentService.getAll(adsId),
        ]).then(([adsData, comments]) => {
            const adsState = {
                ...adsData,
                comments,
            };
           
            dispatch({type: 'ADS_FETCH', payload: adsState})
        });
    }, [adsId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(adsId, values.comment);
        
        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail,
            userName,
        });
    };

    const isOwner = ads._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${ads.title}`);

        if (result) {
            await adsService.delete(ads._id);

            deleteAds(ads._id);

            navigate('/ads');
        }
    };

    return (
        <section id="ads-details">
            <h1>Ads Details</h1>
            <div className="info-section">

                <div className="ads-header">
                    <img className="ads-img" src={ads.imageUrl} alt='' style={{width: "50%"}} />
                    <h1>{ads.title}</h1>
                    <span className="category">Category:</span>
                    <p className="type">{ads.category}</p>
                    <span className="creator">Creator:</span>
                    <p className="type">{ads.creator}</p>
                </div>

                <p className="text">Description: {ads.description}</p>
                <p className="text">Price: {ads.price}</p>
                <p className="text">Phone Number: {ads.phoneNumber}</p>
                <p className="text">Location: {ads.location}</p>
                <p className="text">Email: {ads.userEmail}</p>
                <p className="text">Condition: {ads.condition}</p>
                <p className="text">Date: {ads.date}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {ads.comments && ads.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.userName ? x.author.userName : x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {!ads.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {isOwner && (
                    <div className="buttons">
                        <Link to={`/ads/${ads._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    );
};