import axios from 'axios';
import type { Nutrition } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export const getNutrition = async (): Promise<Nutrition[]> => {
  const response = await axios.get(`${API_BASE_URL}/nutrition`);
  return Array.isArray(response.data) ? response.data : response.data.nutrition;
};

export const addNutrition = async (nutrition: Omit<Nutrition, 'id'>): Promise<Nutrition> => {
  const response = await axios.post(`${API_BASE_URL}/nutrition`, nutrition);
  return response.data;
};

export const deleteNutrition = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/nutrition/${id}`);
};