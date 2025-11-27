export interface ProductItem {
  id: number;
  name: string;
  price: number;
  priceWithDiscount: number;
  discountPercent: number;
  mainImageUrl: string;
  category: string;
  color: string;
  material: string;
}

export interface HomePageData {
  specialOffers: ProductItem[];
  bestSellers: ProductItem[];
  ecoNews: ProductItem[];
}
