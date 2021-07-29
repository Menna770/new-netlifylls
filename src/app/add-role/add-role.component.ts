import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RolesDataService } from '../roles-data.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {
  myForm!: FormGroup;

  unSub: any;

  listPermissions: any[] = [];

  allRoles: {}[] = [];

  constructor(
    public _RolesDataService: RolesDataService,
    private _Router: Router,
    private _UserDataService: UserDataService,
    private fb: FormBuilder,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.idRole = this._ActivatedRoute.snapshot.params.id;
    if (this.idRole) {
      this._RolesDataService.stop = true;
    }

    _RolesDataService.getPermissions().subscribe((roles) => {
      this.listPermissions = roles.data;
      // console.log(roles.data);
      // this.emails = roles.data.id;
    });
  }

  submitRole(form: any) {
    if (this._RolesDataService.checkEditRole) {
      this._RolesDataService.editRoles(form.value).subscribe((res) => {
        console.log(res);
      });
    } else {
      this._RolesDataService.AddRoles(form.value).subscribe((res) => {
        console.log(res);
      });
    }
    this.myForm.reset();
  }

  onChange(id: string) {
    const rolePermission = <FormArray>this.myForm?.controls.permission;
    let index = rolePermission.controls.findIndex((x) => x.value == id);
    if (index == -1) {
      rolePermission.push(new FormControl(id));
    } else {
      rolePermission.removeAt(index);
    }
  }

  idRole: string = '';

  dataRole: any;

  ngOnInit(): void {
    console.log(this.idRole);

    this._RolesDataService.getRoleById(this.idRole).subscribe((res) => {
      this.dataRole = res.data;
      console.log(res);
    });

    // if (localStorage.getItem('roles') != null) {
    //   this.allRoles = JSON.parse(localStorage.getItem('roles') || '{}');
    // } else {
    //   this.allRoles = [];
    // }

    /* -------------------------------- api data -------------------------------- */
    this.myForm = this.fb.group({
      title: new FormControl(),
      description: new FormControl(),
      permission: this.fb.array([]),
    });
    if (this.dataRole) {
      this.myForm.patchValue({
        title: this.dataRole.title,
        description: this.dataRole.description,
        permission: this.dataRole.permissions,
      });
    }
  }

  cancel() {
    this._Router.navigate(['./control/roles']);
  }

  deleteRole() {
    // this.allRoles.splice(this.roleIndex, 1);
    localStorage.setItem('roles', JSON.stringify(this.allRoles));
    // this.addRole.reset();
    this._Router.navigate(['./control/roles']);
  }

  ngOnDestroy(): void {
    if (this.unSub) {
      this.unSub.unsubscribe();
    }
    this._RolesDataService.stop = false;
  }
  CanDeactivate() {
    // if (this.addRole.status == 'VALID' && this.addRole.touched) {
    //   return window.confirm('your data not save');
    // } else {
    //   return true;
    // }
    return true;
  }
}
