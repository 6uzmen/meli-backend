import axios from 'axios';

const API_URL = process.env.ML_API_URL || '';

export const getItemsBySearchParamerter = (searchParameter: string) =>
  axios.get(`${API_URL}/sites/MLA/search?q=${searchParameter}`);

export const getItemById = (itemId: string) => axios.get(`${API_URL}/items/${itemId}`);

export const getItemDescriptionById = (itemId: string) => axios.get(`${API_URL}/items/${itemId}/description`);
