import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { admissionsSteps } from '../../../content/school-content';

@Component({
  selector: 'app-admissions-section',
  imports: [RouterLink],
  templateUrl: './admissions-section.component.html',
  styleUrl: './admissions-section.component.css'
})
export class AdmissionsSectionComponent {
  protected readonly admissionsSteps = admissionsSteps;
}
