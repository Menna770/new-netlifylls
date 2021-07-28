import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  /* ----------------------- transfer DataUser to Edit ----------------------- */
  dataUser: any = new BehaviorSubject(null);
  getData(Data: any) {
    this.dataUser.next(Data);
  }
  checkEdit: any;

  indexNum: number = 0;

  stop: any = false;

  constructor() {}
}
