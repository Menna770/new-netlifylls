import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchNamePipe } from './search-name.pipe';
import { ControlComponent } from './control/control.component';
import { GradingBookComponent } from './grading-book/grading-book.component';
import { LearningAnalysesComponent } from './learning-analyses/learning-analyses.component';
import { LabeSectionComponent } from './labe-section/labe-section.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { CoursesComponent } from './courses/courses.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionComponent } from './permission/permission.component';
import { UserTableComponent } from './user-table/user-table.component';
import { RoleTableComponent } from './role-table/role-table.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { PermissionTableComponent } from './permission-table/permission-table.component';
import { EditPermissionComponent } from './edit-permission/edit-permission.component';
import { HttpClientModule } from '@angular/common/http';
import { AddOrEditRoleComponent } from './add-or-edit-role/add-or-edit-role.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    SearchNamePipe,
    ControlComponent,
    GradingBookComponent,
    LearningAnalysesComponent,
    LabeSectionComponent,
    ExperimentsComponent,
    CoursesComponent,
    RolesComponent,
    PermissionComponent,
    UserTableComponent,
    RoleTableComponent,
    AddRoleComponent,
    PermissionTableComponent,
    EditPermissionComponent,
    AddOrEditRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
