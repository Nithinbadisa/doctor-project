import { RenderMode, ServerRoute } from '@angular/ssr';
import { services } from './content/site-content';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => services.map(({ slug }) => ({ slug }))
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
