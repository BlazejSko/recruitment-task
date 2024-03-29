import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../movies.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movieList: any = [];
  displayedColumns = ['Title', 'Year', 'Poster', 'Options'];
  searchedText: string = 'Star Wars';
  numberOfMovies = 0;
  pageNumber = 1;

  constructor(
    private moviesService: MoviesService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.refreshMovieList();
    this.wishlistService.getAllWishes();
  }

  refreshMovieList() {
    this.moviesService
      .getMovieSearchedList(this.searchedText, this.pageNumber)
      .subscribe((data) => {
        this.movieList = data;
        this.numberOfMovies = this.movieList.totalResults;
      });
  }

  show() {
    this.refreshMovieList();
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex + 1;
    this.refreshMovieList();
  }

  addToWishList(title: string) {
    this.wishlistService.addWish(title);
  }
}
