import { EditPermissionComponent } from './edit-permission/edit-permission.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ControlComponent } from './control/control.component';
import { CoursesComponent } from './courses/courses.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { LabeSectionComponent } from './labe-section/labe-section.component';
import { LearningAnalysesComponent } from './learning-analyses/learning-analyses.component';
import { GradingBookComponent } from './grading-book/grading-book.component';
import { PermissionComponent } from './permission/permission.component';
import { UserTableComponent } from './user-table/user-table.component';
import { RoleTableComponent } from './role/role-table/role-table.component';
import { PermissionTableComponent } from './permission-table/permission-table.component';
import { LoadingGuardGuard } from './loading-guard.guard';
import { AddOrEditRoleComponent } from './role/add-or-edit-role/add-or-edit-role.component';

const routes: Routes = [
  { path: '', redirectTo: 'control', pathMatch: 'full' },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Experiments', component: ExperimentsComponent },
  { path: 'Labe-section', component: LabeSectionComponent },
  { path: 'learning-Analyses', component: LearningAnalysesComponent },
  { path: 'Grading-Book', component: GradingBookComponent },
  /* ---------------------------- control component --------------------------- */
  {
    path: 'control',
    component: ControlComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      /* ----------------------------- users component ---------------------------- */
      {
        path: 'users',
        component: UsersComponent,
        children: [
          { path: '', redirectTo: 'userTable', pathMatch: 'full' },
          { path: 'userTable', component: UserTableComponent },
          {
            path: 'addUser',
            component: AddUserComponent,
            canDeactivate: [LoadingGuardGuard],
          },
        ],
      },

      /* -------------------------- permission component -------------------------- */
      {
        path: 'permission',
        component: PermissionComponent,
        children: [
          { path: '', redirectTo: 'permissionTable', pathMatch: 'full' },
          { path: 'permissionTable', component: PermissionTableComponent },
          { path: 'editPermission', component: EditPermissionComponent },
        ],
      },
      /* ---------------------------------- roles component --------------------------------- */
      {
        path: 'role',
        component: RoleTableComponent,
      },
      {
        path: 'AddRole',
        component: AddOrEditRoleComponent,
      },
      {
        path: 'EditRole/:id',
        component: AddOrEditRoleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
