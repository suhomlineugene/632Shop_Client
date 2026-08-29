import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

export interface SelectOption {
  label: string;
  value: string;
}

interface DropdownDto {
  id: number;
  name: string;
}

interface DropdownResponse {
  result: DropdownDto[];
}

@Injectable({
  providedIn: 'root'
})
export class CarSelectorService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getYears(): Observable<SelectOption[]> {
    return this.http.get<DropdownResponse>(`${this.baseUrl}/VehicleSelector/GetYears`).pipe(
      map(response => response.result.map(item => ({label: item.name, value: item.id.toString()})))
    );
  }

  public getBrands(year: string): Observable<SelectOption[]> {
    return this.http.get<DropdownResponse>(`${this.baseUrl}/VehicleSelector/GetBrands`, {params: {year}}).pipe(
      map(response => response.result.map(item => ({label: item.name, value: item.id.toString()})))
    );
  }

  public getModels(year: string, brandId: string): Observable<SelectOption[]> {
    return this.http.get<DropdownResponse>(`${this.baseUrl}/VehicleSelector/GetModels`, {
      params: {
        year,
        brandId
      }
    }).pipe(
      map(response => response.result.map(item => ({label: item.name, value: item.id.toString()})))
    );
  }

  public getVariants(year: string, modelId: string): Observable<SelectOption[]> {
    return this.http.get<DropdownResponse>(`${this.baseUrl}/VehicleSelector/GetVariants`, {
      params: {
        year,
        modelId
      }
    }).pipe(
      map(response => response.result.map(item => ({label: item.name, value: item.id.toString()})))
    );
  }
}

