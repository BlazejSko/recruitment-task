import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  movieId: string = '';
  movie: any = '';

  constructor(
    private http: SharedService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.movieId = params['id'];
          this.refreshMovie(params['id']);
          console.log(params)
        });
  }

  refreshMovie(id: string){
    this.http.getOneMovie(id).subscribe(data => {
      this.movie = data;
    })
  }



  show(){
    console.log(this.movieId)
    console.log(this.movie)
  }
}
