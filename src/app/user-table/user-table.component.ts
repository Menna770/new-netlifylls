import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from './../user-data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  Users1: any[] = [];
  charSear: string = '';
  ngOnInit(): void {
    /* ----------------- function to get data from localStorage ----------------- */
    if (localStorage.getItem('usersLLS') == null) {
      this.Users1 = [];
    } else {
      var retrievedObject = localStorage.getItem('usersLLS');
      this.Users1 = JSON.parse(retrievedObject || '{}');
    }
  }
  constructor(
    private _Router: Router,
    public _UserDataService: UserDataService
  ) {}

  /* -------------------------------- edit user ------------------------------- */
  edit(indexNum: number, Data: any) {
    this._UserDataService.indexNum = indexNum;
    this._UserDataService.checkEdit = true;
    this._Router.navigate(['/control/users/addUser']);
    this._UserDataService.getData(Data);
    this._UserDataService.stop = true;
  }
  /* ------------------- to reset Data whin inter component ------------------- */
  reset() {
    this._UserDataService.checkEdit = false;
  }
}
