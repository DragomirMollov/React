import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { adsServiceFactory } from '../services/adsService';

export const AdsContext = createContext();

export const AdsProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [ads, setAds] = useState([]);
    const adsService = adsServiceFactory();

    useEffect(() => {
        adsService.getAll()
            .then(result => {
                setAds(result)
            })
    }, [adsService]);

    const onCreateAdsSubmit = async (data) => {
        const newAds = await adsService.create(data);

        setAds(state => [...state, newAds]);

        navigate('/ads');
    };

    const onAdsEditSubmit = async (values) => {
        const result = await adsService.edit(values._id, values);

        setAds(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/ads/${values._id}`);
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