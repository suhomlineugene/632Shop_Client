import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

export interface SelectOption {
  label: string;
  value: string;
}

interface YearResponse {
  result: string[];
}

interface BrandsResponse {
  result: Brand[];
}

interface Brand {
  name: string;
  slug: string;
  isActive: boolean;
  id: number;
}

interface ModelsResponse {
  result: Model[];
}

interface Model {
  name: string;
  slug: string;
  isActive: boolean;
  id: number;
}

interface VehicleVariantsResponse {
  result: VehicleVariant[];
}

interface VehicleVariant {
  id: number;
  engineCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarSelectorService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getYears(): Observable<SelectOption[]> {
    return this.http.get<YearResponse>(`${this.baseUrl}/CarSelector/GetYears`).pipe(
      map(response => response.result.map(item => ({label: item, value: item})))
    );
  }

  public getBrands(year: string): Observable<SelectOption[]> {
    return this.http.get<BrandsResponse>(`${this.baseUrl}/CarSelector/GetBrands`, {params: {year}}).pipe(
      map(response => response.result.map(item => ({label: item.name, value: item.id.toString()})))
    );
  }

 public  getModels(brandId: string, year: string): Observable<SelectOption[]> {
    return this.http.get<ModelsResponse>(`${this.baseUrl}/CarSelector/GetModelsByBrandId`, {
      params: {
        brandId,
        year
      }
    }).pipe(
      map(response => response.result.map(item => ({label: item.name, value: item.id.toString()})))
    );
  }

  public getVariants(modelId: string, year: string): Observable<SelectOption[]> {
    return this.http.get<VehicleVariantsResponse>(`${this.baseUrl}/CarSelector/GetVariantsByModelId`, {
      params: {
        modelId,
        year
      }
    }).pipe(
      map(response => response.result.map(item => ({label: item.engineCode, value: item.id.toString()})))
    );
  }
}

