import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    public _UserDataService: UserDataService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  reset() {
    this._UserDataService.checkEdit = false;
    this._UserDataService.stop = true;
  }
}
