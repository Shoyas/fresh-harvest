export interface Product {
  id: string;
  categoryId: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  categoryName: string;
}

export interface Category {
  categoryName: string;
  id: string;
}
