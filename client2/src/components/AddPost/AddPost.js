import { useAdsContext } from '../../contexts/AdsContext';

import { AdsSchema } from './AddPostSchema/AdsSchema';
import './addPost.scss'
import { useForm } from '../../hooks/useForm';


export const AddAds = () => {
    const {onCreateAdsSubmit} = useAdsContext();

    const { values, changeHandler, onSubmit } = useForm({
        AdsSchema
    }, onCreateAdsSubmit);
    return (
        
        <section id="create-page" className="auth">
            <form id="create" method="post" onSubmit={onSubmit}>
            <div className="post">
                    <h1>Add Post</h1> 

                    <label htmlFor="ads-title">Title:</label>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter ads title..." />

                    <label htmlFor="ads-category">Category</label>
                    <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter ads category..." />

                    <label htmlFor="location">Location:</label>
                    <input value={values.location} onChange={changeHandler} type="text" id="location" name="location" placeholder="Enter ads location..." />

                    <label htmlFor="phoneNumber">PhoneNumber:</label>
                    <input value={values.phoneNumber} onChange={changeHandler} type="number" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="price">Price:</label>
                    <input value={values.price} onChange={changeHandler} type="number" id="price" name="price" placeholder="Add your asking price" />


                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={values.description} onChange={changeHandler}></textarea>

                    <label htmlFor="creator">Creator:</label>
                    <textarea name="creator" id="creator" value={values.creator} onChange={changeHandler} placeholder='Add your name, email, or any necessary info '></textarea>

                    <label htmlFor='date'>Date:</label>
                    <input type="text" name='date' id='date' value={values.date} placeholder='Enter date of creation' />

                    <input className="btn submit" type="submit" value="Create Ads" />
                </div>
            </form>
        </section>
    )
}