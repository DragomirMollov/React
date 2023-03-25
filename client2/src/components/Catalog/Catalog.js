import { CatalogItem } from "./CatalogItem/CatalogItem";

import './catalog.scss'

export const Catalog = ({
    games,
}) => {
    return (
        <section className="card" id="catalog-page">
            <h1 className="card-header">All Ads</h1>
                <CatalogItem />
            {/* {games.map(x =>
                <CatalogItem key={x._id} {...x} />
            )} */}

            {/* {games.length === 0 && ( */}
                <h3 className="no-articles">No ads yet</h3>
            {/* )} */}
        </section>
    );
};