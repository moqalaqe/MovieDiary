import { Component, effect, input } from '@angular/core';
import { PersonalComment } from './personal-comment/personal-comment';
import { DropDown } from '../drop-down/drop-down';
import { DropDownConfig } from '../../../core/models/drop-down.model';

@Component({
  selector: 'app-details-card',
  imports: [PersonalComment, DropDown],
  templateUrl: './details-card.html',
  styleUrl: './details-card.scss',
})
export class DetailsCard {
  public readonly movieDetails = input.required<any>();

  public readonly values = ['0', ...Array.from({ length: 51 }, (_, i) => (5 + i / 10).toFixed(1))];

  public readonly myRating: DropDownConfig = {
    values: this.values,
    label: 'My Rating: ',
    iconUrl: 'assets/star.svg',
  };

  constructor() {
    effect(() => {
      console.log(this.movieDetails());
    });
  }
}
