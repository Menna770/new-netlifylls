import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.scss'],
})
export class EditPermissionComponent implements OnInit {
  constructor() {}

  allPermission: any = [];
  objPermission: {} = {};
  ngOnInit(): void {
    this.allPermission = JSON.parse(localStorage.getItem('roles') || '{}');
    console.log(this.allPermission);
    this.objPermission = this.allPermission[0];
  }
}
