import { Routes } from '@angular/router';
import { InformationPageComponent } from './pages/information/information-page.component';
import { HomePageComponent } from './pages/home/home-page.component';

export const routes: Routes = [
	{ path: '', component: HomePageComponent, title: 'National School | Vidyadharpuram, Vijayawada' },
	{ path: 'about-us', component: InformationPageComponent, data: { pageKey: 'about' }, title: 'About National School' },
	{ path: 'academics', component: InformationPageComponent, data: { pageKey: 'academics' }, title: 'Academics | National School' },
	{ path: 'student-life', component: InformationPageComponent, data: { pageKey: 'studentLife' }, title: 'Student Life | National School' },
	{ path: 'admissions', component: InformationPageComponent, data: { pageKey: 'admissions' }, title: 'Admissions | National School' },
	{ path: 'contact-us', component: InformationPageComponent, data: { pageKey: 'contact' }, title: 'Contact | National School' },
	{ path: '**', redirectTo: '' }
];
