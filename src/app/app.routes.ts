import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.dashboardRoutes)
      },
      {
        path: 'bookings',
        loadChildren: () => import('./views/bookings/routes').then((m) => m.bookingRoutes)
      },
      {
        path: 'members',
        loadChildren: () => import('./views/members/routes').then((m) => m.membersRoutes)
      },
      {
        path: 'plan',
        loadChildren: () => import('./views/plan/routes').then((m) => m.planRoutes)
      },
      {
        path: 'courses',
        loadChildren: () => import('./views/courses/routes').then((m) => m.coursesRoutes)
      },
      {
        path: 'tee',
        loadChildren: () => import('./views/tee/routes').then((m) => m.teeRoutes)
      },
      {
        path: 'events',
        loadChildren: () => import('./views/events/routes').then((m) => m.eventsRoutes)
      },
      {
        path: 'tournament',
        loadChildren: () => import('./views/tournament/routes').then((m) => m.tournamentRoutes)
      },
      {
        path: 'scoreBoard',
        loadChildren: () => import('./views/scoreboard/routes').then((m) => m.scoreBoardRoutes)
      },
      {
        path: 'blog',
        loadChildren: () => import('./views/blog/routes').then((m) => m.blogRoutes)
      },
      {
        path: 'coupon',
        loadChildren: () => import('./views/coupon/routes').then((m) => m.couponRoutes)
      },
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
