import { Component } from '@angular/core';
import { schoolLife } from '../../../content/school-content';

@Component({
  selector: 'app-school-life-section',
  templateUrl: './school-life-section.component.html',
  styleUrl: './school-life-section.component.css'
})
export class SchoolLifeSectionComponent {
  protected readonly schoolLife = schoolLife;
}
