import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page.component';
import { SitePage } from './pages/site/site-page.component';

export const routes: Routes = [
	{ path: '', component: HomePage, title: 'MindCare | A clearer way forward' },
	{ path: 'services', component: SitePage, data: { pageKey: 'services' }, title: 'Services | MindCare' },
	{ path: 'services/:slug', component: SitePage, data: { pageKey: 'service-detail' } },
	{ path: 'therapies', component: SitePage, data: { pageKey: 'therapies' }, title: 'Therapies | MindCare' },
	{ path: 'assessments', component: SitePage, data: { pageKey: 'assessments' }, title: 'Self-checks | MindCare' },
	{ path: 'resources', component: SitePage, data: { pageKey: 'resources' }, title: 'Resources | MindCare' },
	{ path: 'how-it-works', component: SitePage, data: { pageKey: 'howItWorks' }, title: 'How care works | MindCare' },
	{ path: 'about', component: SitePage, data: { pageKey: 'about' }, title: 'About | MindCare' },
	{ path: 'contact', component: SitePage, data: { pageKey: 'contact' }, title: 'Contact | MindCare' },
	{ path: 'faq', component: SitePage, data: { pageKey: 'faq' }, title: 'FAQs | MindCare' },
	{ path: 'crisis-support', component: SitePage, data: { pageKey: 'crisis' }, title: 'Urgent support | MindCare' },
	{ path: 'privacy', component: SitePage, data: { pageKey: 'privacy' }, title: 'Privacy policy | MindCare' },
	{ path: 'terms', component: SitePage, data: { pageKey: 'terms' }, title: 'Terms of use | MindCare' },
	{ path: 'disclaimer', component: SitePage, data: { pageKey: 'disclaimer' }, title: 'Medical disclaimer | MindCare' },
	{ path: 'accessibility', component: SitePage, data: { pageKey: 'accessibility' }, title: 'Accessibility | MindCare' },
	{ path: '**', component: SitePage, data: { pageKey: 'notFound' }, title: 'Page not found | MindCare' }
];
