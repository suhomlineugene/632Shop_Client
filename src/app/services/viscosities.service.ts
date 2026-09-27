import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ViscosityDto } from '../models/viscosity.model';
import { ProductType } from '../models/product-type.enum';

interface ViscosityListResponse {
  result: ViscosityDto[];
}

@Injectable({
  providedIn: 'root'
})
export class ViscositiesService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getList(productType: ProductType): Observable<ViscosityDto[]> {
    return this.http.get<ViscosityListResponse>(`${this.baseUrl}/${this.getEndpoint(productType)}`).pipe(
      map(response => response.result)
    );
  }

  private getEndpoint(productType: ProductType): string {
    switch (productType) {
      case ProductType.EngineOil:
        return 'Viscosities/GetEngineViscositiesList';
      case ProductType.TransmissionOil:
        return 'Viscosities/GetTransmissionViscositiesList';
      default:
        throw new Error(`Unsupported product type: ${productType}`);
    }
  }
}
