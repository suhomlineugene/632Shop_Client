import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineOilDto } from '../../models/engine-oil.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input({ required: true }) products: EngineOilDto[] = [];
}
