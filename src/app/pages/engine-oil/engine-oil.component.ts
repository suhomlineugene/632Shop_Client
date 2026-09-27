import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProductLayoutComponent } from '../../components/product-layout/product-layout.component';
import { BrandFilterComponent } from '../../components/brand-filter/brand-filter.component';
import { ViscosityFilterComponent } from '../../components/viscosity-filter/viscosity-filter.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { FilterOption } from '../../models/filter-option.model';
import { EngineOilDto } from '../../models/engine-oil.model';
import { EngineOilFilterDto } from '../../models/engine-oil-filter.model';
import { ProductType } from '../../models/product-type.enum';
import { EngineOilsService } from '../../services/engine-oils.service';

@Component({
  selector: 'app-engine-oil',
  imports: [
    CommonModule,
    FormsModule,
    ProgressSpinnerModule,
    ProductLayoutComponent,
    BrandFilterComponent,
    ViscosityFilterComponent,
    ProductListComponent
  ],
  templateUrl: './engine-oil.component.html',
  styleUrl: './engine-oil.component.scss'
})
export class EngineOilComponent implements OnInit {
  constructor(private readonly engineOilsService: EngineOilsService) {}

  public products = signal<EngineOilDto[]>([]);
  public loading = signal<boolean>(true);

  private readonly filter: EngineOilFilterDto = {};

  public readonly productType = ProductType.EngineOil;

  public oemApprovals: FilterOption[] = [
    { label: 'Porsche C40', checked: true },
    { label: 'MB 229.51', checked: false },
    { label: 'VW 511.00', checked: false }
  ];

  public ngOnInit(): void {
    this.loadEngineOils();
  }

  public onBrandSelected(brandId: number | null): void {
    this.filter.brandId = brandId;
    this.loadEngineOils();
  }

  public onViscositySelected(viscosityId: number | null): void {
    this.filter.viscosityId = viscosityId;
    this.loadEngineOils();
  }

  private loadEngineOils(): void {
    this.loading.set(true);
    this.engineOilsService.getEngineOils(this.filter).subscribe({
      next: products => this.products.set(products),
      complete: () => this.loading.set(false),
      error: () => this.loading.set(false)
    });
  }
}
