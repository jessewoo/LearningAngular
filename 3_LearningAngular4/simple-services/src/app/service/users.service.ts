import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private user = new BehaviorSubject<string>('john');

  //  Observe the changes anywhere
  cast = this.user.asObservable();

  constructor() { }

  editUser(newUser){
    this.user.next(newUser);
  }
}
