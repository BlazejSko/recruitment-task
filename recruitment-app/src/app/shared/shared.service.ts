import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "https://www.omdbapi.com/?s=Star+Wars&apikey=639b9b00"
  constructor(private http: HttpClient) { }

  getMovieList(){
    return this.http.get(this.APIUrl)
    // .pipe(map((data: any)=>data.Search));
  }

  getMovieSearchedList(text: string, page: number){
    return this.http.get('https://www.omdbapi.com/?s=' + text + '&page=' + page + '&apikey=639b9b00')
  }

  getOneMovie(id: string){
    return this.http.get('https://www.omdbapi.com/?i=' + id + '&apikey=639b9b00');
  }
}
