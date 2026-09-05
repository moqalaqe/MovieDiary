import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-personal-comment',
  imports: [],
  templateUrl: './personal-comment.html',
  styleUrl: './personal-comment.scss',
})
export class PersonalComment {
  public save = output<string>();

  public comment = signal<string>('');

  public saveComment(): void {
    this.save.emit(this.comment());
  }
}
