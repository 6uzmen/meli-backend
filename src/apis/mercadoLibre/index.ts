import axios from 'axios';

const API_URL = process.env.ML_API_URL || 'https://api.mercadolibre.com';

export const getItemsBySearchParamerter = (searchParam: string, limit: number) => {
  // tslint:disable-next-line:no-console
  console.log(`${API_URL}/sites/MLA/search?q=${searchParam}&limit=${limit}`);
  return axios.get(`${API_URL}/sites/MLA/search?q=${searchParam}&limit=${limit}`);
};

export const getItemById = (itemId: string) => axios.get(`${API_URL}/items/${itemId}`);

export const getItemDescriptionById = (itemId: string) => axios.get(`${API_URL}/items/${itemId}/description`);
