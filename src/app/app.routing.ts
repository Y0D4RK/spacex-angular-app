import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent, LaunchesComponent } from './pages';

const appRoutes: Routes = [
  { path: 'company', component: CompanyComponent },
  { path: 'launches', component: LaunchesComponent },
];

export const AppRouting = RouterModule.forRoot(appRoutes);
