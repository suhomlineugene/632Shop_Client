import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-category-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent implements OnChanges {
  @Input() title = '';
  @Input() path = '/';
  @Input() icon = '';
  @Input() background = '';

  public safeIcon: SafeHtml = '';

  constructor(private readonly sanitizer: DomSanitizer) {}

  public ngOnChanges(): void {
    this.safeIcon = this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }
}

