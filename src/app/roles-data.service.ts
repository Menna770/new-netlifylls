import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RolesDataService {
  constructor() {}

  editedRole = new BehaviorSubject(null);
  roleIndex: number = 0;
  checkEditRole: boolean = false;
  stop: boolean = false;

  roleData(data: any) {
    this.editedRole.next(data);
  }
}
