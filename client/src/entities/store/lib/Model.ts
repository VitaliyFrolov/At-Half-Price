import { IStoreData } from '../types/Data';

export default class StoreModel {
  discountsCount: number;
  imgUrl: string;
  name: string;
  id: number;

  constructor(data: IStoreData) {
    this.discountsCount = data.discounts_count;
    this.imgUrl = `/media/stores/${data.picture_name}`;
    this.id = data.pk
    this.name = data.name;
  }
}
