import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, CompanyComponent, LaunchesComponent, LaunchComponent } from './pages';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent, data: { breadcrumbs: 'Company Informations'}},
  { path: 'launches/:id', component: LaunchComponent, data: { breadcrumbs: 'Détails d\'une mission'}},
  { path: 'launches', component: LaunchesComponent, data: { breadcrumbs: 'Missions'}},
];

export const AppRouting = RouterModule.forRoot(appRoutes);
