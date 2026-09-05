import { Component, effect, inject, input, output, signal } from '@angular/core';
import { PersonalComment } from '../personal-comment/personal-comment';
import { DropDown } from '../../../../shared/components/drop-down/drop-down';
import { DropDownConfig } from '../../../../core/models/drop-down.model';
import { MovieDetails } from '../../movie-details';
import { SaveDetails } from '../save-details/save-details';
import { SaveMovie } from '../../../../core/services/save-movie';

@Component({
  selector: 'app-details-card',
  imports: [PersonalComment, SaveDetails],
  templateUrl: './details-card.html',
  styleUrl: './details-card.scss',
})
export class DetailsCard {
  public readonly movieDetails = input.required<any>();

  private readonly saveMovieService = inject(SaveMovie);

  public details = signal<any>({});
  public personalComment = signal<string>('');

  public onDetailsChange(value: any): void {
    this.details.set(value);
  }

  public onSave(comment: string) {
    this.personalComment.set(comment);

    const value = {
      personalComment: this.personalComment(),
      ...this.details(),
    };

    this.saveMovieService.saveMovie(value);
  }
}
