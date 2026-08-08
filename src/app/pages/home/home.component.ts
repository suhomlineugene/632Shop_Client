import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleSelectorComponent } from '../../components/vehicle-selector/vehicle-selector.component';
import { MainPageBannerComponent } from '../../components/main-page-banner/main-page-banner.component';
import { CategoryStripComponent } from '../../components/category-strip/category-strip.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, VehicleSelectorComponent, MainPageBannerComponent, CategoryStripComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

