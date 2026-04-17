import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes, faHome, faBox, faList, faTag, faCircleInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  faBars = faBars;
  faTimes = faTimes;

  menuItems = [
    { label: 'Home', icon: faHome },
    { label: 'Products', icon: faBox },
    { label: 'Categories', icon: faList },
    { label: 'Deals', icon: faTag },
    { label: 'About Us', icon: faCircleInfo },
    { label: 'Contact', icon: faEnvelope }
  ];

  closeMenu(): void {
    this.close.emit();
  }

  onMenuItemClick(item: any): void {
    console.log('Menu item clicked:', item.label);
    this.closeMenu();
    // TODO: Navigate to page
  }
}

