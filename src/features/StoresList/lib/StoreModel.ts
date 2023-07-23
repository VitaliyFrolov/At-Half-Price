import { IStoreData } from '../types/Data';


export default class StoreModel {
  discountsCount: number;
  imgUrl: string;
  name: string;
  id: number;

  constructor(data: IStoreData) {
    this.discountsCount = data.discount;
    this.imgUrl = data.imgUrl;
    this.id = data.id
    this.name = data.name;
  }
}
