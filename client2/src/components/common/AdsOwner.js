import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useAdsContext } from "../../contexts/AdsContext";

export const AdsOwner = ({
    children,
}) => {
    const { adsId } = useParams();
    const { getAds } = useAdsContext();
    const { userId } = useAuthContext();

    const currentAds = getAds(adsId);

    if (currentAds && currentAds._ownerId !== userId) {
        return <Navigate to={`/ads/${adsId}`} replace />
    }

    return children ? children : <Outlet />
};