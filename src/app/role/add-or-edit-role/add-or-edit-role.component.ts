import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesDataService } from '../../services/roles-data.service';
import { PermissionDataService } from '../../services/permission-data.service';

@Component({
  selector: 'app-add-or-edit-role',
  templateUrl: './add-or-edit-role.component.html',
  styleUrls: ['./add-or-edit-role.component.scss'],
})
export class AddOrEditRoleComponent implements OnInit {
  roleId = '';
  addOrEdit = 'Add';
  Permissions: any[] = [];
  form!: FormGroup;

  constructor(
    private FB: FormBuilder,
    private _Router: Router,
    public _RolesDataService: RolesDataService,
    public _PermissionDataService: PermissionDataService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.roleId = this._ActivatedRoute.snapshot.params.id;
    if (this.roleId) this.addOrEdit = 'Edit';
    this.form = FB.group({
      id: [''],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      description: [''],
      permissions: [[]],
    });
  }

  async ngOnInit() {
    if (this.roleId) {
      await this.getRoleData();
    }
    await this.getPermissions();
  }

  getRoleData() {
    this._RolesDataService.getRoleById(this.roleId).subscribe((res) => {
      this.form = this.FB.group({
        id: [res.data.id],
        title: [res.data.title],
        description: [res.data.description],
        permissions: [res.data.permissions],
      });
    });
  }

  async getPermissions() {
    var PermissionData = await this._PermissionDataService
      .getPermissions()
      .toPromise();
    this.Permissions = PermissionData.data;
  }

  onChange(id: string) {
    let index = this.form.value.permissions.findIndex(
      (x: any) => x.value == id
    );
    if (index == -1) {
      this.form.value.permissions.push(id);
    } else {
      this.form.value.permissions.removeAt(index);
    }
  }

  submitRole(form: any) {
    if (form.valid) {
      if (this.roleId) {
        this._RolesDataService.EditRole(form.value).subscribe((res) => {});
      } else {
        this._RolesDataService.AddRole(form.value).subscribe((res) => {});
      }
      this.form.reset();
      this._Router.navigate(['./control/role']);
    }
  }

  cancel() {
    this._Router.navigate(['./control/role']);
  }

  deleteRole(form: any) {
    this._RolesDataService.DeleteRole(form.value).subscribe((res) => {
      console.log('res', res);
    });
    this._Router.navigate(['./control/role']);
  }

  get registerFormControl() {
    return this.form.controls;
  }
}
