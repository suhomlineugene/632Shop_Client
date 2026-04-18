import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBars, faCartShopping, faCircleUser, faSearch} from '@fortawesome/free-solid-svg-icons';
import {MenuComponent} from '../menu/menu.component';
import {ButtonDirective} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule, MenuComponent, ButtonDirective, FormsModule, InputText],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public faBars = faBars;
  public login = faCircleUser;
  public cart = faCartShopping
  public searchIcon = faSearch;
  public logo_alt = '/logo.svg';

  public isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onSearch(query: string): void {
    console.log('Search query:', query);
    // TODO: Implement search functionality
  }
}

