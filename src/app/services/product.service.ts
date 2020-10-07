import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IProduct} from '../types';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IProductsResponse} from './response.types';

@Injectable()

export class ProductService {
  private productList: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  public productList$ = this.productList.asObservable();

  constructor(private http: HttpClient) {}

  public getProducts(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.get<IProductsResponse>('http://comlyn.com/rnd/api/product', {headers}).subscribe(
      res => {
        this.productList.next(res.data);
      }
    );
  }
}
