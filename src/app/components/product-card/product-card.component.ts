import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineOilDto } from '../../models/engine-oil.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: EngineOilDto;
}
