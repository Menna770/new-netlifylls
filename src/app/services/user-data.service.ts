import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  constructor(private _HttpClient: HttpClient) {}

  // createAuthorizationHeader(headers: HttpHeaders) {
  //   headers.append('Content-Type', 'application/json');
  // }
  api: string = 'https://asrt-lls-api.herokuapp.com/api';

  // getUsers(): Observable<any> {
  //   const headers = { 'Content-Type': 'application/json' };
  //   return this._HttpClient.get(
  //     'https://asrt-lls-api.herokuapp.com/api/user/GetUsers',
  //     { headers }
  //   );
  // }
}
