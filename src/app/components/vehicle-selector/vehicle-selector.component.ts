import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SelectModule} from 'primeng/select';
import {faCar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CarSelectorService, SelectOption} from '../../services/car-selector.service';

@Component({
  selector: 'app-vehicle-selector',
  imports: [CommonModule, FormsModule, SelectModule, FontAwesomeModule],
  templateUrl: './vehicle-selector.component.html',
  styleUrl: './vehicle-selector.component.scss'
})
export class VehicleSelectorComponent implements OnInit {
  public carIcon = faCar;

  constructor(private carSelectorService: CarSelectorService) {
  }

  selectedYear: string | null = null;
  selectedMake: string | null = null;
  selectedModel: string | null = null;
  selectedEngine: string | null = null;

  years: SelectOption[] = [];
  makes: SelectOption[] = [];
  models: SelectOption[] = [];
  engines: SelectOption[] = [];

  public ngOnInit() {
    this.loadYears();
  }

  public loadYears() {
    this.carSelectorService.getYears().subscribe(years => {
      this.years = years;
    });
  }

  public onYearChange() {
    // Reset dependent fields
    this.selectedMake = null;
    this.selectedModel = null;
    this.selectedEngine = null;

    // Load makes based on selected year
    if (this.selectedYear) {
      this.loadMakes();
    } else {
      this.makes = [];
    }
  }

  public loadMakes() {
    this.carSelectorService.getBrands(this.selectedYear!).subscribe(brands => {
      this.makes = brands;
    });
  }

  public onMakeChange() {
    // Reset dependent fields
    this.selectedModel = null;
    this.selectedEngine = null;

    // Load models based on selected make
    if (this.selectedMake) {
      this.loadModels();
    } else {
      this.models = [];
    }
  }

  public loadModels() {
    this.carSelectorService.getModels(this.selectedYear!, this.selectedMake!).subscribe(models => {
      this.models = models;
    });
  }

  public onModelChange() {
    // Reset dependent fields
    this.selectedEngine = null;

    // Load engines based on selected model
    if (this.selectedModel) {
      this.loadEngines();
    } else {
      this.engines = [];
    }
  }

  public loadEngines() {
    this.carSelectorService.getVariants(this.selectedYear!, this.selectedModel!).subscribe(variants => {
      this.engines = variants;
    });
  }

  public onSearch() {
    if (this.selectedYear && this.selectedMake && this.selectedModel && this.selectedEngine) {
      console.log('Search:', {
        year: this.selectedYear,
        make: this.selectedMake,
        model: this.selectedModel,
        engine: this.selectedEngine
      });
      // Implement search logic here
    }
  }

  public isSearchDisabled(): boolean {
    return !this.selectedYear || !this.selectedMake || !this.selectedModel || !this.selectedEngine;
  }
}

