// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { BarController, BarElement, Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
// Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);
// Chart.register(LineController, LineElement, PointElement, BarController, BarElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// import { ReportCardComponent } from './reuseable_components/report-card/report-card.component';
// import { provideCharts } from 'ng2-charts';
// import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';


// bootstrapApplication(ReportCardComponent, {
//   providers: [provideCharts()]
// });


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BarController, BarElement, Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);
Chart.register(LineController, LineElement, PointElement, BarController, BarElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const updatedAppConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};

bootstrapApplication(AppComponent, updatedAppConfig)
  .catch((err) => console.error(err));
