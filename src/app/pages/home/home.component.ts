import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleSelectorComponent } from '../../components/vehicle-selector/vehicle-selector.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, VehicleSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

