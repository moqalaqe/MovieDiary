import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxScrollbarComponent } from '@omnedia/ngx-scrollbar';
import { DropDownConfig } from '../../../core/models/drop-down.model';

@Component({
  selector: 'app-drop-down',
  imports: [FormsModule, NgxScrollbarComponent],
  templateUrl: './drop-down.html',
  styleUrl: './drop-down.scss',
})
export class DropDown {
  public dropDownConfig = input.required<DropDownConfig>();
  public onSelect = output<any>();

  public isOpened = signal<boolean>(false);
  public selectedValue = signal<any>('');

  public toggleDropDown(): void {
    this.isOpened.update((v) => !v);
  }

  public selectValue(value: any): void {
    this.selectedValue.set(value);
    this.toggleDropDown();
    this.onSelect.emit(this.selectedValue());
  }
}
