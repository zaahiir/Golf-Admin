import { Routes } from '@angular/router';

export const memberEnquiryRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Member Enquiries'
    },
    children: [
      {
        path: '',
        loadComponent: () => import('./member-enquiry/member-enquiry.component').then(m => m.MemberEnquiryComponent),
        data: {
          title: 'List Member Enquiries'
        },
      },
    ]
  }
];
