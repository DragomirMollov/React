import { requestFactory } from './requester';

const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'http://localhost:3030'; // TODO: Add server url when deployed
const url = `${baseUrl}/data/ads`;

export const adsServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const ads = Object.values(result);
    
        return ads;
    };
    
    const getOne = async (adsId) => {
        const result = await request.get(`${url}/${adsId}`);
    
        return result;
    };
    
    const create = async (adsData) => {
        const result = await request.post(url, adsData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (adsId, data) => request.put(`${url}/${adsId}`, data);

    const deleteAds = (adsId) => request.delete(`${url}/${adsId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteAds,
    };
}