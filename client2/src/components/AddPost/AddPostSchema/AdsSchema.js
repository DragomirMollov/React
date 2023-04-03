import React, { Fragment } from 'react';

import { FormikController } from '../../../utils/PostSchema/FormikController';
// import { Items } from '../../../utils/Items/Items';
import { AddComment } from '../../AdsDetails/addComemnt/AddComment'

import '../../styles/Sections.scss';
import '../../styles/Forms.scss';
import '../../styles/List.scss';
import '../../styles/Card.scss';

import bannerImage from '../../../images/banner.jpg';

export const AdsSchema = ({
  initialValues = {
    title: '',
    category: '',
    image: '',
    location: '',
    date: '',
    price: '',
    phoneNumber: '',
    description: '',
    creator: '',
    viewCount: '',
    isTop: false,
    posts: [],
  },
  imageBackground = {
    backgroundImage: `url(${bannerImage})`,
  },
}) => {
  let { title, image, price, description, date, location, phoneNumber,  posts } = initialValues;
  // let items = Items;
  const postImage = {
    width: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundSize: 'cover',
    height: '100%',
    backgroundImage: `url(${image})`,
  };

  return (
    <Fragment>
        <FormikController>
      <div style={imageBackground}>
        {posts.length ? (
          <div className='section-results'>
            {/* <div className='container'>
              <h3 className='mb-4 h3'>{posts.length ? `Found ${posts.length} ads` : ''}</h3>
              {posts ? (
                <ul>
                  {posts.map((item) => (
                    <li key={item._id}>{...items}</li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </div> */}
          </div>
        ) : (
          ''
        )}

        <section className='section-post-details'>
          <div className='container'>
            <div className='section__inner'>
              <div className='section__content'>
                <div className='post-details'>
                  <div className='post__head'>
                    <div className='post__image'>
                      <div style={postImage}></div>
                    </div>

                    <div className='post__head-mobile'>
                      <h3 className='post__title'>{title}</h3>

                      <span className='post__price-mobile visible-sm-inline visible-xs-inline'>
                        {price ? `${price}$` : ''}
                      </span>
                    </div>

                    <div className='post__meta'>
                      <div className='post__location'>
                        <strong>Location:</strong>
                        <span>{location}</span>
                      </div>

                      <div className='post__date'>
                        <strong>Added:</strong>

                        <span>{new Date(date).toLocaleDateString('en-US', 'short')}</span>
                      </div>
                    </div>
                  </div>

                  <div className='post__body'>
                    <div className='post__content'>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>

                <AddComment phoneNumber={ phoneNumber }/>
              </div>
            </div>
          </div>
        </section>
      </div>
      </FormikController>
    </Fragment>
  );
};
