import { RolesDataService } from '../../services/roles-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

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
  allRoles: any;
  ngOnInit(): void {
    /* ----------------------------- api data table ----------------------------- */
    this._RolesDataService.getRoles().subscribe((data) => {
      this.allRoles = data.data;
    });
  }
}
