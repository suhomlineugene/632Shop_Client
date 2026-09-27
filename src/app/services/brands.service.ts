import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BrandDto } from '../models/brand.model';

interface BrandListResponse {
  result: BrandDto[];
}

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<BrandDto[]> {
    return this.http.get<BrandListResponse>(`${this.baseUrl}/Brands/GetAll`).pipe(
      map(response => response.result)
    );
  }
}
