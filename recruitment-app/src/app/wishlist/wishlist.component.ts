import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wish: string = '';
  wishesList: string[] = [];
  wishesDoneList: string[] = [];
  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.refreshWishes();
    this.wishlistService.subject.subscribe({
      next: () => {
        this.refreshWishes();
      },
    });
  }

  // ngOnDestroy() {
  //   this.wishlistService.subject.unsubscribe();
  // }

  addWish() {
    this.wishlistService.addWish(this.wish);
  }
  deleteWish(wish: string) {
    this.wishlistService.deleteWish(wish);
  }

  refreshWishes() {
    this.wishesList = this.wishlistService.getAllWishes();
  }
}
