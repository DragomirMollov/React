import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAdsContext } from "../../contexts/AdsContext";
import { useAuthContext } from '../../contexts/AuthContext'

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { adsServiceFactory } from "../../services/adsService";

export const EditAds = () => {
    const { onAdsEditSubmit, errorMessage } = useAdsContext();
    const { adsId } = useParams();
    const adsService = useService(adsServiceFactory);
    const { userName, userEmail } = useAuthContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        category: '',
        location: '',
        phoneNumber: '',
        imageUrl: '',
        price: 0,
        condition: '',
        description: '',
        creator: userName || userEmail,
        date: new Date().toLocaleDateString('en-US', 'short'),
    }, onAdsEditSubmit);

    useEffect(() => {
        adsService.getOne(adsId)
            .then(result => {
                changeValues(result);
            });
    }, [adsId]);

    

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

                    <label htmlFor="phoneNumber">PhoneNumber:</label>
                    <input  
                    type="text" 
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

                    <label htmlFor="leg-price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={values.price}
                        onChange={changeHandler}
                    />
                    <label htmlFor="leg-condition">Condition:</label>
                    <input
                        type="text"
                        id="condition"
                        name="condition"
                        value={values.condition}
                        onChange={changeHandler}
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea 
                    name="description" 
                    id="description" 
                    value={values.description} 
                    onChange={changeHandler}>
                    </textarea>

                    {errorMessage && <p>{errorMessage}</p>}

                    <input className="btn submit" type="submit" value="Edit Ads" style={{padding: "inherit"}} />
                </div>
            </form> 
        </section>
    );
};