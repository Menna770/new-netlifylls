import { Component, OnInit } from '@angular/core';
import { RolesDataService } from '../roles-data.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  constructor(public _RolesDataService: RolesDataService) {}

  ngOnInit(): void {}

  reset() {
    this._RolesDataService.checkEditRole = false;
    this._RolesDataService.stop = true;
  }
}
