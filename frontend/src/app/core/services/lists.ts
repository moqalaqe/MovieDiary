import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Lists {
  public getList(id: string): void {
    console.log('get List named: ');
  }
  public addMovieToList(movieID: string, listID: string): void {
    console.log('add movie in list!');
  }
}
