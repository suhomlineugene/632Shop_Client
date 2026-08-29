import { Component, OnInit } from '@angular/core';
import { MainBannerService, MainBannerDto } from '../../services/main-banner.service';

@Component({
  selector: 'app-main-page-banner',
  templateUrl: './main-page-banner.component.html',
  styleUrls: ['./main-page-banner.component.scss']
})
export class MainPageBannerComponent implements OnInit {
  public banner: MainBannerDto | null = null;

  constructor(private mainBannerService: MainBannerService) { }

  public ngOnInit(): void {
    this.mainBannerService.getMainBanner().subscribe(b => this.banner = b);
  }
}
