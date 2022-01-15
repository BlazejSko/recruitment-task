import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList: any = [];
  displayedColumns = ['Title', 'Year', 'Poster'];
  searchedText!: string;
  numberOfMovies: number = 0;
  pageNumber: number = 1;

  
  constructor(private http: SharedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.searchedText=params['searched'];
      this.refreshMovieList();
    });
  }

  refreshMovieList(){
    this.http.getMovieSearchedList(this.searchedText, this.pageNumber).subscribe(data=>{
      this.movieList = data;
      this.numberOfMovies = this.movieList.totalResults;
    });
  }

  show(){
    console.log(this.movieList);
    console.log(this.numberOfMovies);
    console.log(this.pageNumber);

    this.refreshMovieList()
  }

  onPageChange(event: PageEvent){
    this.pageNumber = event.pageIndex +1;
    this.refreshMovieList();
  }

}
