import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, CompanyComponent, LaunchesComponent, LaunchComponent, RocketComponent, RocketsComponent } from './pages';

const appRoutes: Routes = [
  { path: '', data: { breadcrumbs: 'Accueil'},
    children: [
      { path: '', component: HomeComponent},
      { path: 'company', component: CompanyComponent, data: { breadcrumbs: 'Infos sur la compagnie'}},
      { path: 'launches', data: { breadcrumbs: 'Missions'},
        children: [
          { path: '', component: LaunchesComponent},
          { path: ':id', component: LaunchComponent, data: { breadcrumbs: 'Détails d\'une mission'}},
        ]
      },
      { path: 'rockets', data: { breadcrumbs: 'Roquettes'},
        children: [
          { path: '', component: RocketsComponent},
          { path: ':id', component: RocketComponent, data: { breadcrumbs: 'Détails d\'une roquette'}},
        ]
      },
    ]
  },
];

export const AppRouting = RouterModule.forRoot(appRoutes);
