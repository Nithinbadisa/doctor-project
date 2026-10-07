import { RenderMode, ServerRoute } from '@angular/ssr';
import { serviceChecks } from './content/service-checks';
import { services } from './content/site-content';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => services.map(({ slug }) => ({ slug }))
  },
  {
    path: 'assessments/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => Object.keys(serviceChecks).map((slug) => ({ slug }))
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
