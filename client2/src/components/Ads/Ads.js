import { useAdsContext } from "../../contexts/AdsContext";

import { AdsItem } from "./AdsItem/AdsItem";

import './ads.scss'

export const Ads = () => {
    const { ads } = useAdsContext();

    return (
        <section className="card" id="catalog-page">
            <h1 className="card-header">All Ads</h1>
            
            {ads.map(x =>
                <AdsItem key={x._id} {...x} />
            )}

            {ads.length === 0 && (
                <h3 className="no-articles">No ads yet</h3>
            )}
        </section>
    );
};