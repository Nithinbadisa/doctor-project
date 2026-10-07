import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { careSteps, services } from '../../content/site-content';

type ServiceFilter = 'all' | 'mood' | 'life' | 'starting';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePage {
  protected readonly services = services;
  protected readonly careSteps = careSteps;
  protected readonly serviceFilters: { id: ServiceFilter; label: string }[] = [
    { id: 'all', label: 'All options' },
    { id: 'mood', label: 'Mood & stress' },
    { id: 'life', label: 'Everyday life' },
    { id: 'starting', label: 'Not sure yet' }
  ];
  protected selectedFilter: ServiceFilter = 'all';

  protected get filteredServices() {
    const slugsByFilter: Record<Exclude<ServiceFilter, 'all'>, string[]> = {
      mood: ['anxiety', 'depression', 'stress'],
      life: ['sleep', 'relationships'],
      starting: ['general']
    };

    return this.selectedFilter === 'all'
      ? this.services
      : this.services.filter((service) => slugsByFilter[this.selectedFilter as Exclude<ServiceFilter, 'all'>].includes(service.slug));
  }

  protected setFilter(filter: ServiceFilter): void {
    this.selectedFilter = filter;
  }
}
