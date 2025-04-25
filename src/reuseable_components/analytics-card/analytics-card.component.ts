import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './analytics-card.component.html',
  styleUrl: './analytics-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() icon!: string;
  @Input() trend?: string;

  isPositiveTrend(): boolean {
    return this.trend?.startsWith('+') ?? false;
  }
}
