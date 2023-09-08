import { IStoreData } from '../types/Data';

export default class StoreModel {
  discountsCount: number;
  imgUrl: string;
  name: string;
  id: number;

  constructor(data: IStoreData) {
    this.discountsCount = data.discounts_quantity;
    this.imgUrl = `/assets/stores/${data.id}.png`;
    this.id = data.id
    this.name = data.name;
  }
}
