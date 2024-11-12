import axios from 'axios';

const BASE_URL = 'https://api.restful-api.dev/objects';

export const getAllProducts = () => axios.get(BASE_URL);

export const getProductById = (id) => axios.get(`${BASE_URL}/${id}`);

export const createProduct = (product) => axios.post(BASE_URL, product);

export const updateProduct = (id, updatedData) => axios.put(`${BASE_URL}/${id}`, updatedData);

export const deleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);
