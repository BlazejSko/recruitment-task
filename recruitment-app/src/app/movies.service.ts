import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIUrl } from './core/APIUrl';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovieList() {
    return this.http.get(APIUrl);
  }

  getMovieSearchedList(text: string, page: number) {
    return this.http.get(
      'https://www.omdbapi.com/?s=' +
        text +
        '&page=' +
        page +
        '&apikey=639b9b00'
    );
  }

  getOneMovie(id: string) {
    return this.http.get(
      'https://www.omdbapi.com/?i=' + id + '&apikey=639b9b00'
    );
  }
}
