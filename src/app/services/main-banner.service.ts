import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface MainBannerDto {
  badgeText?: string;
  isBadgeVisible?: boolean;
  title?: string;
  description?: string;
  imageUrl?: string;
  isActive?: boolean;
}

interface ApiResponse<T> {
  result: T;
}

@Injectable({
  providedIn: 'root'
})
export class MainBannerService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getMainBanner(): Observable<MainBannerDto | null> {
    return this.http.get<ApiResponse<MainBannerDto | null>>(`${this.baseUrl}/HomePage/GetMainBanner`).pipe(
      map(response => response.result)
    );
  }
}
