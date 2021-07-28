import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permission-table',
  templateUrl: './permission-table.component.html',
  styleUrls: ['./permission-table.component.scss'],
})
export class PermissionTableComponent implements OnInit {
  constructor(private _Router: Router) {}

  allPermission: any = [];
  objPermission: {} = {};
  ngOnInit(): void {
    this.allPermission = JSON.parse(localStorage.getItem('roles') || '{}');
    this.objPermission = this.allPermission[0];
  }
  editPermission() {
    this._Router.navigate(['./control/permission/editPermission']);
  }
}
