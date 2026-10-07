import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { informationPages, schoolProfile } from '../../content/school-content';

@Component({
  selector: 'app-information-page',
  imports: [RouterLink],
  templateUrl: './information-page.component.html',
  styleUrl: './information-page.component.css'
})
export class InformationPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly routeData = toSignal(this.route.data, { initialValue: this.route.snapshot.data });

  protected readonly pageKey = computed(() => this.routeData()?.['pageKey'] as string ?? 'about');
  protected readonly page = computed(() => informationPages[this.pageKey()] ?? informationPages['about']);
  protected readonly school = schoolProfile;
}
