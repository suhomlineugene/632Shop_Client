import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { EngineOilDto } from '../models/engine-oil.model';
import { EngineOilFilterDto } from '../models/engine-oil-filter.model';

interface EngineOilListResponse {
  result: EngineOilDto[];
}

interface EngineOilResponse {
  result: EngineOilDto;
}

@Injectable({
  providedIn: 'root'
})
export class EngineOilsService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getEngineOils(filter?: EngineOilFilterDto): Observable<EngineOilDto[]> {
    let params = new HttpParams();

    if (filter?.brandId != null) {
      params = params.set('brandId', filter.brandId);
    }

    if (filter?.viscosityId != null) {
      params = params.set('viscosityId', filter.viscosityId);
    }

    return this.http.get<EngineOilListResponse>(`${this.baseUrl}/EngineOils/GetEngineOils`, { params }).pipe(
      map(response => response.result)
    );
  }

  public getEngineOilById(id: number): Observable<EngineOilDto> {
    return this.http.get<EngineOilResponse>(`${this.baseUrl}/EngineOils/GetEngineOilById`, {
      params: { id }
    }).pipe(
      map(response => response.result)
    );
  }
}
