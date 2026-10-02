import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { careSteps, services } from '../../content/site-content';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePage {
  protected readonly services = services;
  protected readonly careSteps = careSteps;
}
