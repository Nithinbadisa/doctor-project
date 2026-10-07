import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { schoolProfile } from '../content/school-content';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css'
})
export class SiteFooterComponent {
  protected readonly school = schoolProfile;
  protected readonly currentYear = new Date().getFullYear();
}
