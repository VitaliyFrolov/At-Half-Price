import { IProductData } from '../types/Data';

export class ProductModel {
  price: number;
  productName: string;
  storeName: string;
  imgUrl: string;
  discountPercent: number;
  id: number;

  constructor(data: IProductData) {
    this.price = data.price;
    this.productName = data.productName;
    this.storeName = data.storeName;
    this.imgUrl = data.imgUrl;
    this.discountPercent = data.discountPercent;
    this.id = data.id;
  };

}