import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAdsContext } from "../../contexts/AdsContext";

import { AdsSchema } from '../AddPost/AddPostSchema/AdsSchema';

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { adsServiceFactory } from "../../services/adsService";

export const EditAds = () => {
    const { onAdsEditSubmit } = useAdsContext();
    const { adsId } = useParams();
    const adsService = useService(adsServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        AdsSchema 
    }, onAdsEditSubmit);

    useEffect(() => {
        adsService.getOne(adsId)
            .then(result => {
                changeValues(result);
            });
    }, [adsId, adsService, changeValues]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="post" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Ads</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                    />

                    <label htmlFor="leg-category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                    />

                    <label htmlFor="leg-location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={values.location}
                        onChange={changeHandler}
                    />

                    <label htmlFor="leg-phoneNumber">PhoneNumber:</label>
                    <input
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={changeHandler}
                    />

                    <label htmlFor="ads-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />

                    <label htmlFor="leg-price">price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={values.price}
                        onChange={changeHandler}
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={values.description} onChange={changeHandler}></textarea>

                    <label htmlFor="creator">Creator:</label>
                    <textarea name="creator" id="creator" value={values.creator} onChange={changeHandler}></textarea>

                    <label htmlFor="leg-date">Date:</label>
                    <input
                        type="text"
                        id="date"
                        name="date"
                        value={values.date}
                        onChange={changeHandler}
                    />
                    <input className="btn submit" type="submit" value="Edit Ads" />

                </div>
            </form>
        </section>
    );
};