import { Component, input } from '@angular/core';

@Component({
  selector: 'app-collection-card',
  imports: [],
  templateUrl: './collection-card.html',
  styleUrl: './collection-card.scss',
})
export class CollectionCard {
  public readonly title = input.required<string>();
}
