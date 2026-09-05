import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-card',
  imports: [],
  templateUrl: './collection-card.html',
  styleUrl: './collection-card.scss',
})
export class CollectionCard {
  private readonly router = inject(Router);
  public readonly title = input.required<string>();

  public goToListDetails(): void {
    this.router.navigate(['/list', this.title()]);
  }
}
