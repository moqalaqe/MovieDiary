import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-comment',
  imports: [],
  templateUrl: './personal-comment.html',
  styleUrl: './personal-comment.scss',
})
export class PersonalComment {
  public saveComment(): void {
    console.log('Save my comment!');
  }
}
