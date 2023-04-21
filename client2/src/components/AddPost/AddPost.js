import { useAdsContext } from '../../contexts/AdsContext';
import './addPost.scss'
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext'

export const AddAds = () => {
    const { onCreateAdsSubmit, errorMessage } = useAdsContext();
    const { userName, userEmail } = useAuthContext();

    const { values, changeHandler, onSubmit } = useForm({
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
    }, onCreateAdsSubmit);

    return (
        <section id="create-page" className="auth">
            <form id="create" method="post" onSubmit={onSubmit}>
                <div className="post">
                    <h1>Add Post</h1> 

                    <label htmlFor="title">Title:</label>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter ads title..." />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter ads category..." />

                    <label htmlFor="location">Location:</label>
                    <input value={values.location} onChange={changeHandler} type="text" id="location" name="location" placeholder="Enter ads location..." />

                    <label htmlFor="phoneNumber">PhoneNumber:</label>
                    <input value={values.phoneNumber} onChange={changeHandler} type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />

                    <label htmlFor="ads-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="price">Price:</label>
                    <input value={values.price} onChange={changeHandler} type="number" id="price" name="price" placeholder="Add your asking price" />
                    
                    <label htmlFor="condition">Condition:</label>
                    <input value={values.condition} onChange={changeHandler} type="text" id="condition" name="condition" placeholder="New, Like New, Used in good condition" />

                    <label htmlFor="description">Description:</label>
                    <textarea value={values.description} onChange={changeHandler} name="description" id="description" ></textarea>

                    {errorMessage && <p>{errorMessage}</p>}

                    <input className="btn submit" type="submit" value="Create Ads" />
                </div>
            </form>
        </section>
    )
}
