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
        console.log(formData);
        if (Object.values(formData).every((value) => value.trim() !== '')) {
            const newAds = await adsService.create(formData);
            setAds(state => [...state, newAds]);
            setErrorMessage(null);
            navigate('/ads');
        } else {
            setErrorMessage('Please fill in all fields');
        }
    };

    const onAdsEditSubmit = async (values) => {
        console.log(values)
        if (Object.values(values).every((value) => value !== '')) {
            const result = await adsService.edit(values._id, values);
      
            setAds((state) =>
              state.map((x) => (x._id === values._id ? result : x))
            );
      
            navigate(`/ads/${values._id}`);
          } else {
            setErrorMessage('Please fill in all fields');
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
        errorMessage,
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
