import { Component, signal } from '@angular/core';
import { SearchDropdown } from '../../shared/components/search-dropdown/search-dropdown';

@Component({
  selector: 'app-list-details',
  imports: [SearchDropdown],
  templateUrl: './list-details.html',
  styleUrl: './list-details.scss',
})
export class ListDetails {
  public listData = signal<any>('');
}
