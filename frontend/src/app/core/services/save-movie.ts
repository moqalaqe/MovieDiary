import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveMovie {
  public saveMovie(value: any): void {
    console.log(value);
  }
}
