import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent, LaunchesComponent, LaunchComponent } from './pages';

const appRoutes: Routes = [
  { path: 'company', component: CompanyComponent, data: { breadcrumb: 'company'}},
  { path: 'launches/:id', component: LaunchComponent, data: { breadcrumb: 'company'}},
  { path: 'launches', component: LaunchesComponent, data: { breadcrumb: 'company'}},
];

export const AppRouting = RouterModule.forRoot(appRoutes);
