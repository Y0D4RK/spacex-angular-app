import { Routes, RouterModule } from '@angular/router';
import { MissionsComponent, CompanyComponent } from './pages';

const appRoutes: Routes = [
  { path: 'missions', component: MissionsComponent },
  { path: 'company', component: CompanyComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
