import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  movieId: string = '';
  movie: any = '';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.movieId = params['id'];
      this.refreshMovie(params['id']);
    });
  }

  refreshMovie(id: string) {
    this.moviesService.getOneMovie(id).subscribe((data) => {
      this.movie = data;
    });
  }
}
