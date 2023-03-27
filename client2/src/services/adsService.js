import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/ads';

export const adsServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const ads = Object.values(result);
    
        return ads;
    };
    
    const getOne = async (adsId) => {
        const result = await request.get(`${baseUrl}/${adsId}`);
    
        return result;
    };
    
    const create = async (adsData) => {
        const result = await request.post(baseUrl, adsData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (adsId, data) => request.put(`${baseUrl}/${adsId}`, data);

    const deleteads = (adsId) => request.delete(`${baseUrl}/${adsId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteads,
    };
}