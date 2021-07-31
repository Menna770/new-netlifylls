import { UserDataService } from '../services/user-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, CanDeactivate } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit, OnDestroy {
  /* --------------------------- name of form group --------------------------- */
  addUser = new FormGroup({
    fName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    sName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    IDNum: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    years: new FormControl(null, [
      Validators.required,
      Validators.min(16),
      Validators.pattern('^[0-9]{2}$'),
    ]),
    gender: new FormControl('male', [Validators.required]),
  });

  constructor(
    private _Router: Router,
    public _UserDataService: UserDataService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  Users1: any[] = [];
  userEdit: any[] = [];
  /* ------------------------------ submit form ------------------------------ */
  subObject(addUser: FormGroup): void {
    if (addUser.status == 'VALID') {
      if (!this.checkEdit) {
        this.Users1.push(addUser.value);
      } else {
        this.Users1.splice(this.indexNum, 1, addUser.value);
      }
      this.userEdit.push(addUser.value);
      localStorage.setItem('usersLLS', JSON.stringify(this.Users1));
      this.checkEdit = false;
      addUser.reset();
    }
  }
  deleteUser() {
    this.Users1.splice(this.indexNum, 1);
    localStorage.setItem('usersLLS', JSON.stringify(this.Users1));
    this.addUser.reset();
    this.checkEdit = false;
  }
  checkEdit = this._UserDataService.checkEdit;
  indexNum = this._UserDataService.indexNum;

  unSub: any;

  ngOnInit(): void {
    if (this.checkEdit) {
      this.unSub = this._UserDataService.dataUser.subscribe((x: any) => {
        this.addUser.setValue({
          fName: x.fName,
          sName: x.sName,
          IDNum: x.IDNum,
          years: x.years,
          gender: x.gender,
        });
      });
    }
    /* ----------------- function to get data from localStorage ----------------- */
    if (localStorage.getItem('usersLLS') == null) {
      this.Users1 = [];
    } else {
      var retrievedObject = localStorage.getItem('usersLLS');
      this.Users1 = JSON.parse(retrievedObject || '{}');
    }
  }
  CanDeactivate() {
    if (this.addUser.status == 'VALID' && this.addUser.touched) {
      return window.confirm('your data not save');
    } else {
      return true;
    }
  }

  ngOnDestroy(): void {
    if (this.unSub) {
      this.unSub.unsubscribe();
      this.checkEdit = false;
    }
    this._UserDataService.stop = false;
  }
}
