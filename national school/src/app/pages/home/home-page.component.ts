import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { schoolProfile } from '../../content/school-content';
import { AdmissionsSectionComponent } from './sections/admissions-section.component';
import { LearningSectionComponent } from './sections/learning-section.component';
import { SchoolIntroSectionComponent } from './sections/school-intro-section.component';
import { SchoolLifeSectionComponent } from './sections/school-life-section.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, SchoolIntroSectionComponent, LearningSectionComponent, SchoolLifeSectionComponent, AdmissionsSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  protected readonly school = schoolProfile;
}
