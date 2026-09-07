import { Component, effect, inject, input, output, signal } from '@angular/core';
import { PersonalComment } from '../personal-comment/personal-comment';
import { SaveDetails } from '../save-details/save-details';
import { IMovieDetails } from '../../../../core/models/movie.model';
import { MovieService } from '../../../../core/services/movies.service';

@Component({
  selector: 'app-details-card',
  imports: [PersonalComment, SaveDetails],
  templateUrl: './details-card.html',
  styleUrl: './details-card.scss',
})
export class DetailsCard {
  public readonly movieDetails = input.required<IMovieDetails>();

  private readonly movieService = inject(MovieService);

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

    this.movieService.saveMovie(value);
  }
}
