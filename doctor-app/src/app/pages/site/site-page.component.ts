import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { getPage, services } from '../../content/site-content';

@Component({
  selector: 'app-site-page',
  imports: [RouterLink],
  templateUrl: './site-page.component.html',
  styleUrl: './site-page.component.css'
})
export class SitePage {
  private readonly route = inject(ActivatedRoute);
  private readonly routeData = toSignal(this.route.data, { initialValue: this.route.snapshot.data });
  private readonly routeParams = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  protected readonly page = computed(() => {
    const key = this.routeData()?.['pageKey'] as string | undefined;
    if (key === 'service-detail') {
      const slug = this.routeParams()?.get('slug');
      const service = services.find((item) => item.slug === slug);
      return service ? { kind: 'service' as const, service } : { kind: 'content' as const, page: getPage('notFound')! };
    }
    return { kind: 'content' as const, page: getPage(key ?? 'notFound') ?? getPage('notFound')! };
  });
}
