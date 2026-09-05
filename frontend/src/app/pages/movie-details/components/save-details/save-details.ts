import { Component, effect, input, output, signal } from '@angular/core';
import { DropDownConfig } from '../../../../core/models/drop-down.model';
import { DropDown } from '../../../../shared/components/drop-down/drop-down';

@Component({
  selector: 'app-save-details',
  imports: [DropDown],
  templateUrl: './save-details.html',
  styleUrl: './save-details.scss',
})
export class SaveDetails {
  public imdbRating = input.required<string>();

  public detailsChange = output<any>();

  public readonly values = ['0', ...Array.from({ length: 51 }, (_, i) => (5 + i / 10).toFixed(1))];
  public readonly lists = ['fav', 'old', 'later'];

  public selectedRating = signal<number | null>(null);
  public selectedList = signal<string>('');

  constructor() {
    effect(() => {
      const rating = this.selectedRating();
      const list = this.selectedList();

      this.detailsChange.emit({
        rating,
        list,
      });
    });
  }

  public readonly myRating: DropDownConfig = {
    values: this.values,
    label: 'My Rating: ',
    iconUrl: 'assets/star.svg',
  };

  public readonly myLists: DropDownConfig = {
    values: this.lists,
    label: 'Select List: ',
    iconUrl: 'assets/collection.svg',
  };
}
