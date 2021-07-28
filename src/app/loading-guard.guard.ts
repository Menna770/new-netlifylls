import { Component, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingGuardGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: AddUserComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.CanDeactivate()) {
      return true;
    } else {
      return false;
    }
  }
}
