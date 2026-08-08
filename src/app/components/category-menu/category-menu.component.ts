import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-category-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.scss'
})
export class CategoryMenuComponent {
  public links: MenuLink[] = [
    { label: 'Engine oil', path: '/category/engine-oil' },
    { label: 'Transmission', path: '/category/transmission' },
    { label: 'Additives', path: '/category/additives' },
    { label: 'Filters', path: '/category/filters' }
  ];
}

