import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // APIのベースURLを指定
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const updateCart = async (cartData) => {
  try {
    const response = await apiClient.post('/cart', cartData);
    return response.data;
  } catch (error) {
    console.error('Error updating cart:', error);
    throw error;
  }
};