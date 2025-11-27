import axios from 'axios';
import type { HomePageData } from '../../types/homePageTypes';

const API_URL = 'http://localhost:8088/api';

export const homePageApi = {
  getHomePageData: async (): Promise<HomePageData> => {
    const response = await axios.get<HomePageData>(`${API_URL}/furniture/main-page`);
    return response.data;
  },
};
