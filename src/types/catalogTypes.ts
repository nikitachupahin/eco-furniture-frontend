export interface FurnitureItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
  category: string;
  color: string;
  material: string;
  createdAt: string;
  inventory: number;
  salesCount: number;
}

export interface PageInfo {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

export interface CatalogResponse {
  content: FurnitureItem[];
  page: PageInfo;
}

export interface FurnitureFilterParams {
  category?: string;
  color?: string;
  material?: string;
  minPrice?: number;
  maxPrice?: number;
  page: number;
  size: number;
}
