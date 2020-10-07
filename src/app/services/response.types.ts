import {IProduct} from '../types';

export interface IProductsResponse {
  status: string;
  data: IProduct[];
}
