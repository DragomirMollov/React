import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { adsServiceFactory } from '../services/adsService';

export const AdsContext = createContext();

export const AdsProvider = ({
  children,
}) => {
  const navigate = useNavigate();
  const [ads, setAds] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const adsService = adsServiceFactory();

  useEffect(() => {
    adsService.getAll()
      .then(result => {
        setAds(result)
      })
  }, []);

  const onCreateAdsSubmit = async (formData) => {
    try {
      if (Object.values(formData).every((value) => value.trim() !== '')) {
        const newAds = await adsService.create(formData);
        setAds(state => [...state, newAds]);
        navigate('/ads');
      } else {
        setErrorMessage('Please fill in all fields');
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message);
    }
  };

  const onAdsEditSubmit = async (values) => {
    try {
      if (Object.values(values).every((value) => value.trim() !== '')) {
        const result = await adsService.edit(values._id, values);

        setAds((state) =>
          state.map((x) => (x._id === values._id ? result : x))
        );

        navigate(`/ads/${values._id}`);
      } else {
        throw new Error('Please fill in all fields');
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message);
    }
  };

  const deleteAds = (adsId) => {
    setAds(state => state.filter(ads => ads._id !== adsId));
  };

  const getAds = (adsId) => {
    return ads.find(ads => ads._id === adsId);
  };

  const contextValues = {
    ads,
    onCreateAdsSubmit,
    onAdsEditSubmit,
    deleteAds,
    getAds,
    errorMessage, // add the errorMessage property to context values
  };

  return (
    <AdsContext.Provider value={contextValues}>
      {children}
    </AdsContext.Provider>
  );
};

export const useAdsContext = () => {
  const context = useContext(AdsContext);

  return context;
};
