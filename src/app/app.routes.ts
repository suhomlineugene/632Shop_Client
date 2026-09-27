import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { EngineOilComponent } from './pages/engine-oil/engine-oil.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'category/engine-oil',
        component: EngineOilComponent
      }
    ]
  }
];
