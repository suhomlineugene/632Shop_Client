import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FormsModule} from '@angular/forms';
import {CategoryMenuComponent} from '../category-menu/category-menu.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule, FormsModule, CategoryMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public searchIcon = faSearch;

  public searchQuery: string = '';

  onSearch(query: string): void {
    console.log('Search query:', query);
    // TODO: Implement search functionality
  }
}

