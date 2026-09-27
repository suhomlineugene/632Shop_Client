import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterOption } from '../../models/filter-option.model';
import { ProductType } from '../../models/product-type.enum';
import { ViscositiesService } from '../../services/viscosities.service';

@Component({
  selector: 'app-viscosity-filter',
  imports: [CommonModule],
  templateUrl: './viscosity-filter.component.html',
  styleUrl: './viscosity-filter.component.scss'
})
export class ViscosityFilterComponent implements OnInit, OnChanges {
  @Input() title = 'Viscosity';
  @Input({ required: true }) productType!: ProductType;
  @Output() viscositySelected = new EventEmitter<number | null>();

  public viscosities: FilterOption[] = [];

  constructor(private readonly viscositiesService: ViscositiesService) {
  }

  public ngOnInit(): void {
    this.loadViscosities();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['productType'] && !changes['productType'].isFirstChange()) {
      this.loadViscosities();
    }
  }

  public toggle(viscosity: FilterOption): void {
    const isChecked = !viscosity.checked;
    this.viscosities.forEach(v => v.checked = false);
    viscosity.checked = isChecked;
    this.viscositySelected.emit(isChecked ? viscosity.id ?? null : null);
  }

  private loadViscosities(): void {
    this.viscositiesService.getList(this.productType).subscribe({
      next: viscosities => this.viscosities = viscosities.map(viscosity => ({
        id: viscosity.id,
        label: viscosity.name,
        checked: false
      }))
    });
  }
}

