import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { serviceChecks } from '../../content/service-checks';

@Component({
  selector: 'app-service-check',
  imports: [RouterLink],
  templateUrl: './service-check.component.html',
  styleUrl: './service-check.component.css'
})
export class ServiceCheckPage {
  private readonly route = inject(ActivatedRoute);
  private readonly routeParams = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  protected readonly check = computed(() => {
    const slug = this.routeParams()?.get('slug');
    return slug ? serviceChecks[slug] ?? null : null;
  });
  protected readonly options = [
    { value: 0, label: 'Never' },
    { value: 1, label: 'Sometimes' },
    { value: 2, label: 'Often' },
    { value: 3, label: 'Almost always' }
  ];
  protected readonly answersBySlug: Record<string, Array<number | null>> = {};
  protected submittedSlug: string | null = null;

  protected get answers(): Array<number | null> {
    const slug = this.check()?.slug;
    return slug ? this.answersBySlug[slug] ?? Array(10).fill(null) : [];
  }

  protected get answeredCount(): number {
    return this.answers.filter((answer) => answer !== null).length;
  }

  protected get score(): number | null {
    return this.answeredCount === 10
      ? this.answers.reduce<number>((total, answer) => total + (answer ?? 0), 0)
      : null;
  }

  protected get resultSubmitted(): boolean {
    return this.submittedSlug === this.check()?.slug;
  }

  protected setAnswer(questionIndex: number, value: number): void {
    const slug = this.check()?.slug;
    if (!slug) return;

    const nextAnswers = [...this.answers];
    nextAnswers[questionIndex] = value;
    this.answersBySlug[slug] = nextAnswers;
    this.submittedSlug = null;
  }

  protected submitCheck(): void {
    const slug = this.check()?.slug;
    if (slug && this.score !== null) this.submittedSlug = slug;
  }

  protected restartCheck(): void {
    const slug = this.check()?.slug;
    if (!slug) return;

    delete this.answersBySlug[slug];
    this.submittedSlug = null;
  }
}