import axios from 'axios';
import type { CatalogResponse, FurnitureFilterParams } from '../../types/catalogTypes';

const API_URL = 'http://localhost:8088/api';

export const catalogApi = {
  getFurniture: async (params: FurnitureFilterParams): Promise<CatalogResponse> => {
    const token = localStorage.getItem('token');

    const response = await axios.get<CatalogResponse>(`${API_URL}/furniture`, {
      params: {
        category: params.category,
        color: params.color,
        material: params.material,
        minPrice: params.minPrice,
        maxPrice: params.maxPrice,
        page: params.page,
        size: params.size,
      },
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
    return response.data;
  },
};
