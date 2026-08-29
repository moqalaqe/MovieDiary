import { Component, computed, DestroyRef, inject, OnInit, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar implements OnInit {
  public readonly onSearch = output<string>();

  private readonly destroyRef = inject(DestroyRef);

  public readonly searchControl = new FormControl('', {
    nonNullable: true,
  });

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(800), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.onSearch.emit(value.trim()));
  }
}
