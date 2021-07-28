import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesDataService } from '../roles-data.service';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss'],
})
export class RoleTableComponent implements OnInit {
  constructor(
    private _Router: Router,
    private _RolesDataService: RolesDataService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('roles') != null) {
      this.allRoles = JSON.parse(localStorage.getItem('roles') || '{}');
    } else {
      this.allRoles = [];
    }
  }

  allRoles: any;

  EditRole(role: any, i: number) {
    this._Router.navigate(['./control/roles/addRole']);
    this._RolesDataService.roleData(role);
    this._RolesDataService.checkEditRole = true;
    this._RolesDataService.stop = true;
    this._RolesDataService.roleIndex = i;
  }
}
