import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartData } from 'chart.js';
import { CommonModule } from '@angular/common';
import { ReportDataSet } from '../../interfaces/report-card';
import { FormsModule } from '@angular/forms';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, FormsModule],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportCardComponent {
  faAngleDown = faAngleDown
  public selectedMetric = 'Sales';
  public metrics = ['Sales', 'Revenue', 'Profit'];
  public selectedRange: 'day' | 'week' | 'month' | 'year' = 'week';
  public labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  private dataSets: Record<string, ReportDataSet> = {
    day: {
      label: 'Sales',
      data: [5, 10, 15, 12, 18, 20, 25]
    },
    week: {
      label: 'Sales',
      data: [33, 65, 59, 80, 81, 56, 92]
    },
    month: {
      label: 'Sales',
      data: [320, 410, 390, 450, 470, 490, 520]
    },
    year: {
      label: 'Sales',
      data: [1200, 1340, 1280, 1400, 1500, 1700, 1800]
    }
  };

  public lineChartData: ChartData<'line'> = this.getChartData(this.selectedRange);

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  changeRange(range: 'day' | 'week' | 'month' | 'year') {
    this.selectedRange = range;
    this.lineChartData = this.getChartData(range);
  }

  private getChartData(range: string): ChartData<'line'> {
    const dataset = this.dataSets[range];
    return {
      labels: this.labels,
      datasets: [
        {
          data: dataset.data,
          label: dataset.label,
          fill: true,
          tension: 0.4,
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(66, 165, 245, 0.2)'
        }
      ]
    };
  }
}
