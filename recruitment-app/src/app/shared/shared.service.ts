import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  subject: Subject<any> = new Subject();
  readonly APIUrl = "https://www.omdbapi.com/?s=Star+Wars&apikey=639b9b00"
  constructor(private http: HttpClient, private cookie: CookieService) { }

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

  addWish(wish: string){
    this.cookie.set(wish, '');
    this.subject.next();
  }

  deleteCookie(wish: string){
    this.cookie.delete(wish);
    this.subject.next();
  }
  
  getAllCookies(){
    return Object.keys(this.cookie.getAll());
  }
}
