import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  subject: Subject<any> = new Subject();

  constructor(private cookie: CookieService) {}

  addWish(wish: string) {
    this.cookie.set(wish, '');
    this.subject.next();
  }

  deleteWish(wish: string) {
    this.cookie.delete(wish);
    this.subject.next();
  }

  getAllWishes() {
    return Object.keys(this.cookie.getAll());
  }
}
