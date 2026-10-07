import { Component } from '@angular/core';
import { learningPrinciples } from '../../../content/school-content';

@Component({
  selector: 'app-learning-section',
  templateUrl: './learning-section.component.html',
  styleUrl: './learning-section.component.css'
})
export class LearningSectionComponent {
  protected readonly learningPrinciples = learningPrinciples;
}
