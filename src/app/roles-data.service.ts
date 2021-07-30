import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RolesDataService {
  constructor(private _HttpClient: HttpClient) {}

  editedRole = new BehaviorSubject(null);
  checkEditRole: boolean = false;
  stop: boolean = false;
  api: string = 'https://asrt-lls-api.herokuapp.com/api';

  roleData(data: any) {
    this.editedRole.next(data);
  }
  getRoles(): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(`${this.api}/role/GetAllRoles`, '{}', {
      headers,
    });
  }

  getPermissions(): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(
      `${this.api}/permission/GetAllPermissions`,
      '{}',
      { headers }
    );
  }

  AddRole(form: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(`${this.api}/role/Create`, form, { headers });
  }

  EditRole(form: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(`${this.api}/role/Edit`, form, { headers });
  }

  DeleteRole(form: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(`${this.api}/role/Delete`, form, { headers });
  }

  getRoleById(id: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._HttpClient.post(
      `${this.api}/role/GetRoleWithPermissions`,
      { id },
      { headers }
    );
  }
}
