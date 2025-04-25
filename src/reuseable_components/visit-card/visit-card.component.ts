import { CommonModule, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-visit-card',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, NgClass, NgFor],
  templateUrl: './visit-card.component.html',
  styleUrl: './visit-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitCardComponent {
  selectedTab: 'D' | 'W' | 'M' | 'Y' = 'W';
  tabs: ('D' | 'W' | 'M' | 'Y')[] = ['D', 'W', 'M', 'Y'];

  visitData: { [key: string]: number[] } = {
    D: [12, 19, 3, 5, 7, 3, 9],
    W: [40, 65, 21, 65, 28, 20, 33],
    M: [30, 130, 90, 170, 89, 40, 75],
    Y: [390, 450, 420, 500, 370, 300, 280]
  };

  get visitsChartData(): ChartData<'bar'> {
    return {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          data: this.visitData[this.selectedTab],
          label: 'Visits',
          backgroundColor: '#2563EB',
          barPercentage: 0.6,
          borderRadius: 4,
          borderSkipped: false
        }
      ]

    };
  }

  visitsChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        grid: { display: false }
      },
      y: {
        grid: { display: false },
        ticks: { stepSize: 20 }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };

  changeTab(tab: 'D' | 'W' | 'M' | 'Y') {
    this.selectedTab = tab;
  }
}
