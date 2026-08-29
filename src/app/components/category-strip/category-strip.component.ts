import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoryCardComponent } from '../category-card/category-card.component';

interface CategoryItem {
  title: string;
  path: string;
  icon: string;
  background: string;
}

@Component({
  selector: 'app-category-strip',
  imports: [CommonModule, RouterLink, CategoryCardComponent],
  templateUrl: './category-strip.component.html',
  styleUrl: './category-strip.component.scss'
})
export class CategoryStripComponent {
  public categories: CategoryItem[] = [
    {
      title: 'Engine Oil',
      path: '/category/engine-oil',
      background: 'url(/engine_category_bg.svg)',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"></path>
      </svg>`
    },
    {
      title: 'Transmission',
      path: '/category/transmission',
      background: 'url(/transmission_category_bg.svg)',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <line x1="6" y1="21" x2="6" y2="9"></line><circle cx="6" cy="6" r="2"></circle>
        <line x1="12" y1="21" x2="12" y2="13"></line><circle cx="12" cy="10" r="2"></circle>
        <line x1="18" y1="21" x2="18" y2="15"></line><circle cx="18" cy="12" r="2"></circle>
      </svg>`
    },
    {
      title: 'Additives',
      path: '/category/additives',
      background: 'linear-gradient(160deg, #16202b 0%, #0c1520 60%, #05070c 100%)',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2"></rect>
        <path d="M12 7v10M9.5 9.5c0-1 .8-1.8 2.5-1.8s2.5.9 2.5 1.9c0 2.6-5 1.4-5 4 0 1 .9 1.9 2.5 1.9s2.5-.8 2.5-1.8"></path>
      </svg>`
    },
    {
      title: 'Filters',
      path: '/category/filters',
      background: 'url(/filters_category_bg.svg)',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="4 4 20 4 14 12 14 19 10 21 10 12 4 4"></polygon>
      </svg>`
    }
  ];
}

