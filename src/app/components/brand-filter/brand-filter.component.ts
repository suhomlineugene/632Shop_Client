import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterOption } from '../../models/filter-option.model';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brand-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './brand-filter.component.html',
  styleUrl: './brand-filter.component.scss'
})
export class BrandFilterComponent implements OnInit {
  @Input() title = 'Brand';
  @Output() brandSelected = new EventEmitter<number | null>();

  public brands: FilterOption[] = [];

  constructor(private readonly brandsService: BrandsService) {
  }

  public ngOnInit(): void {
    this.brandsService.getAll().subscribe({
      next: brands => this.brands = brands.map(brand => ({ id: brand.id, label: brand.name, checked: false }))
    });
  }

  public onBrandChange(brand: FilterOption): void {
    const isChecked = brand.checked;
    this.brands.forEach(b => b.checked = false);
    brand.checked = isChecked;
    this.brandSelected.emit(isChecked ? brand.id ?? null : null);
  }
}
