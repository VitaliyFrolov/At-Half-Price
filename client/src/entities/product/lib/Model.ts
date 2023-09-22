import { IProductData } from '../types/Data';

export class ProductModel {
  price: number;
  productName: string;
  storeName: string;
  storeID: number;
  imgUrl: string;
  discountPercent: number;
  id: number;

  constructor(data: IProductData) {
    this.price = data.price;
    this.productName = data.name;
    this.storeName = data.store_name;
    this.storeID = data.store_pk;
    this.imgUrl = `/media/products/${data.picture_name}`;
    this.discountPercent = data.discount_percent;
    this.id = data.pk;
  };

}