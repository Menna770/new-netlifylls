import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolesDataService } from '../roles-data.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {
  /* ------------------------------- form Group ------------------------------- */
  addRole = new FormGroup({
    id: new FormControl(null),
    roleName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    permissions: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
  });

  /* ------------------------------- post object ------------------------------ */

  // addRoleF = {
  //   id: '',
  //   title: this.addRole.value.roleName,
  //   description: '',
  //   permissions: [''],
  // };
  /* ------------------------------- f post object ------------------------------ */

  listPermissions: any[] = [
    { name: 'Add Experiment', value: '11', formName: 'Add_Experiment' },
    { name: 'Edit Experiment', value: '12', formName: 'Edit_Experiment' },
    { name: 'Delete Experiment', value: '13', formName: 'Delete_Experiment' },
  ];

  allRoles: {}[] = [];
  roleIndex = this._RolesDataService.roleIndex;

  constructor(
    public _RolesDataService: RolesDataService,
    private _Router: Router
  ) {}

  submitRole() {
    console.log(this.addRole.value);
    if (this._RolesDataService.checkEditRole) {
      this.allRoles.splice(this.roleIndex, 1, this.addRole.value);
    } else {
      this.allRoles.push(this.addRole.value);
    }

    localStorage.setItem('roles', JSON.stringify(this.allRoles));
    this.addRole.reset();
  }

  // filterResults(isChecked: any) {
  //   if (isChecked.target.checked) {
  //     this.addRoleF.permissions.push(isChecked.target.value);
  //     console.log(isChecked.target.value); // {}, true || false
  //   }
  // }

  unSub: any;
  ngOnInit(): void {
    if (localStorage.getItem('roles') != null) {
      this.allRoles = JSON.parse(localStorage.getItem('roles') || '{}');
    } else {
      this.allRoles = [];
    }

    /* --------------------------- return data to edit -------------------------- */

    if (this._RolesDataService.checkEditRole) {
      this.unSub = this._RolesDataService.editedRole.subscribe((data: any) => {
        for (let i = 0; i < data.permissions.length; i++) {
          console.log(data.permissions[i]);
          this.addRole.patchValue({
            roleName: data.roleName,
            permissions: [data.permissions[i]],
          });
        }
      });
    }
    /* --------------------------- F return data to edit -------------------------- */
  }

  cancel() {
    this._Router.navigate(['./control/roles']);
  }

  deleteRole() {
    this.allRoles.splice(this.roleIndex, 1);
    localStorage.setItem('roles', JSON.stringify(this.allRoles));
    this.addRole.reset();
    this._Router.navigate(['./control/roles']);
  }

  ngOnDestroy(): void {
    if (this.unSub) {
      this.unSub.unsubscribe();
    }
    this._RolesDataService.stop = false;
  }
  CanDeactivate() {
    if (this.addRole.status == 'VALID' && this.addRole.touched) {
      return window.confirm('your data not save');
    } else {
      return true;
    }
  }
}
