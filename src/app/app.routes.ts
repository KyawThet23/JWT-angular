import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './auth/auth.guard';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
  },
  {
    path: 'list',
    component: EmployeeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'form',
    component: EmployeeFormComponent,
    canActivate: [authGuard]
  }
];
