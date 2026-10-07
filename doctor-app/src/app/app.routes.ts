import { Routes } from '@angular/router';
import { ServiceCheckPage } from './pages/assessment/service-check.component';
import { HomePage } from './pages/home/home-page.component';
import { SitePage } from './pages/site/site-page.component';

export const routes: Routes = [
	{ path: '', component: HomePage, title: 'Dr. Kartheek Kutnani | Antara' },
	{ path: 'services', component: SitePage, data: { pageKey: 'services' }, title: 'Support options | Antara' },
	{ path: 'services/:slug', component: SitePage, data: { pageKey: 'service-detail' } },
	{ path: 'therapies', component: SitePage, data: { pageKey: 'therapies' }, title: 'Therapies | Antara' },
	{ path: 'assessments/:slug', component: ServiceCheckPage, title: 'Service check-in | Antara' },
	{ path: 'assessments', component: SitePage, data: { pageKey: 'assessments' }, title: 'Self-checks | Antara' },
	{ path: 'resources', component: SitePage, data: { pageKey: 'resources' }, title: 'Guides | Antara' },
	{ path: 'how-it-works', component: SitePage, data: { pageKey: 'howItWorks' }, title: 'How care works | Antara' },
	{ path: 'about', component: SitePage, data: { pageKey: 'about' }, title: 'About | Antara' },
	{ path: 'contact', component: SitePage, data: { pageKey: 'contact' }, title: 'Contact | Antara' },
	{ path: 'faq', component: SitePage, data: { pageKey: 'faq' }, title: 'FAQs | Antara' },
	{ path: 'crisis-support', component: SitePage, data: { pageKey: 'crisis' }, title: 'Urgent support | Antara' },
	{ path: 'privacy', component: SitePage, data: { pageKey: 'privacy' }, title: 'Privacy policy | Antara' },
	{ path: 'terms', component: SitePage, data: { pageKey: 'terms' }, title: 'Terms of use | Antara' },
	{ path: 'disclaimer', component: SitePage, data: { pageKey: 'disclaimer' }, title: 'Medical disclaimer | Antara' },
	{ path: 'accessibility', component: SitePage, data: { pageKey: 'accessibility' }, title: 'Accessibility | Antara' },
	{ path: '**', component: SitePage, data: { pageKey: 'notFound' }, title: 'Page not found | Antara' }
];
