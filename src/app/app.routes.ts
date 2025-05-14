import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'vehicles',
        loadComponent: () =>
          import('./features/vehicles/vehicles.component').then(
            (c) => c.VehiclesComponent
          ),
      },
      {
        path: 'service-types',
        loadComponent: () =>
          import('./features/service-types/service-types.component').then(
            (c) => c.ServiceTypesComponent
          ),
      },
      {
        path: 'service-records',
        loadComponent: () =>
          import('./features/service-records/service-records.component').then(
            (c) => c.ServiceRecordsComponent
          ),
      },
    ],
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
];
