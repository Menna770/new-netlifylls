import { RolesDataService } from './../roles-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss'],
})
export class RoleTableComponent implements OnInit {
  constructor(
    private _Router: Router,
    private _RolesDataService: RolesDataService,
    private _UserDataService: UserDataService
  ) {}

  ngOnInit(): void {
    /* ----------------------------- api data table ----------------------------- */
    this._RolesDataService.getRoles().subscribe((data) => {
      this.allRoles = data.data;
      console.log(data.data);
    });
  }

  allRoles: any;

  // EditRole(id: number) {
  //   this._Router.navigate(['./control/roles/addRole']);
  //   this._RolesDataService.checkEditRole = true;
  //   this._RolesDataService.stop = true;
  //   // this._RolesDataService.roleIndex = id;
  // }
}
