import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PermissionDataService {
  constructor(private _HttpClient: HttpClient) {}

  editedPermission = new BehaviorSubject(null);
  checkEditPermission: boolean = false;
  stop: boolean = false;
  api: string = 'https://asrt-lls-api.herokuapp.com/api';

  getPermissions(): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(
      `${this.api}/permission/GetAllPermissions`,
      '{}',
      { headers }
    );
  }

  AddPermissions(data: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(`${this.api}/Permission/Create`, data, {
      headers,
    });
  }

  editPermissions(data: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(`${this.api}/Permission/Edit`, data, {
      headers,
    });
  }

  getPermissionById(id: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(
      `${this.api}/Permission/GetPermissionWithRoles`,
      { id },
      { headers }
    );
  }
}
