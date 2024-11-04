import { Routes } from '@angular/router';

export const membersRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Member'
    },
    children: [
      {
        path: '',
        loadComponent: () => import('./list-members/list-members.component').then(m => m.ListMembersComponent),
        data: {
          title: 'List Members'
        },
      },
      {
        path: 'add',
        loadComponent: () => import('./create-members/create-members.component').then(m => m.CreateMembersComponent),
        data: {
          title: 'New Member'
        },
      },
      {
        path: 'update',
        loadComponent: () => import('./update-members/update-members.component').then(m => m.UpdateMembersComponent),
        data: {
          title: 'Update Members'
        },
      }
    ]
  }
];
