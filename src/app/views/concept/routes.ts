import { Routes } from '@angular/router';

export const couponRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Concept'
    },
    children: [
      {
        path: '',
        loadComponent: () => import('./update-concept/update-concept.component').then(m => m.UpdateConceptComponent),
        data: {
          title: 'Update Concept'
        },
      },
      {
        path: 'add',
        loadComponent: () => import('./create-concept/create-concept.component').then(m => m.CreateConceptComponent),
        data: {
          title: 'New Concept'
        },
      },
    ]
  }
];
