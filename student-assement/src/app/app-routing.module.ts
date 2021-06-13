import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeregisteredClassesComponent } from './deregistered-classes/deregistered-classes.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { LoginComponent } from './login/login.component';
import { MarksComponent } from './marks/marks.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterClassesComponent } from './register-classes/register-classes.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoleComponent } from './role/role.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersTableComponent } from './teachers-table/teachers-table.component';

const routes: Routes = [
  { path: '',component: LogRegComponent },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'profile',component: ProfileComponent },
  { path: 'marks' ,component: MarksComponent },
  { path: 'registerclasses' ,component: RegisterClassesComponent },
  { path: 'deregisterclasses' ,component: DeregisteredClassesComponent },
  { path: 'log-reg' ,component: LogRegComponent },
  { path: 'role' ,component: RoleComponent },
  { path: 'login' ,component: LoginComponent },
  { path: 'registration' ,component: RegistrationComponent },
  { path: 'student' ,component: StudentComponent },
  { path: 'teacher' ,component: TeacherComponent },
  { path: 'teacherTable' ,component: TeachersTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
