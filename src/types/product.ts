export interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  }).format(price);
};
