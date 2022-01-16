import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wish: string = '';
  wishesList: string[] = [];
  wishesDoneList: string[] = [];
  constructor(private cookieService: SharedService) { }

  ngOnInit(): void {
    this.refreshCookies();
    this.cookieService.subject.subscribe({
      next: ()=> {
        this.refreshCookies();
      }
    });
  }

  addWish(){
    this.cookieService.addWish(this.wish);
  }
  deleteCookie(wish: string){
    this.cookieService.deleteCookie(wish);
  }

  refreshCookies(){
    this.wishesList = this.cookieService.getAllCookies();
  }

}
