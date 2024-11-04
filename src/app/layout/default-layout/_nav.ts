import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Members',
    url: '/members',    
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Plan',
    url: '/plan',
        iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Courses',
    url: '/courses',
        iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Tee',
    url: '/tee',
        iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Events',
    url: '/events',
        iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Tournament',
    url: '/tournament',
        iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'ScoreBoard',
    url: '/scoreBoard',
        iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Blog',
    url: '/blog',
        iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Coupon',
    url: '/coupon',
        iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Report',
    url: '/base/popovers',
        iconComponent: { name: 'cil-speedometer' },
  },
];
