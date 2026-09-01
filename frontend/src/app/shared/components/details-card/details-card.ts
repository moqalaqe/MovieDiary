import { Component, effect, input } from '@angular/core';
import { PersonalComment } from './personal-comment/personal-comment';

@Component({
  selector: 'app-details-card',
  imports: [PersonalComment],
  templateUrl: './details-card.html',
  styleUrl: './details-card.scss',
})
export class DetailsCard {
  public readonly movieDetails = input.required<any>();

  constructor() {
    effect(() => {
      console.log(this.movieDetails());
    });
  }
}
