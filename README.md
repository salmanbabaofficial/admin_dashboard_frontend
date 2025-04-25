
# 📊 Admin Dashboard (Angular)

A responsive and modern Admin Dashboard built with Angular and Angular Material using **Standalone Components**. This project is based on a technical task and focuses on clean architecture, modular design, and responsive UI.

---

## 🚀 Features

- Modern, responsive layout (Desktop, Tablet, Mobile)
- Sidebar with navigation (Dashboard, Orders, Items, Reports, etc.)
- Top navbar with profile section
- Key Analytics Cards (Revenue, Sales, Active Users)
- Interactive Charts (Line and Bar)
- Recent Orders Table with pagination
- Angular routing and lazy loading
- Modular architecture with **Standalone Components**
- Reusable components and services
- Mock data integration and error handling

---

## 🧰 Technologies Used

- **Angular** (v18)
- **Angular Material** (UI Components)
- **TypeScript**
- **SCSS**
- **ng2-charts / Chart.js** (for charts)
- **RxJS** (observables for async data + search functionality with operators like debounceTime, switchMap, etc.)
- **dummy data** Custom mock data (used in place of real APIs for testing and development)

---

## 📁 Project Structure

admin-dashboard/
│
├── src/
│   ├── app/
│   │   ├── features/
│   │   │   ├── dashboard/                  # Dashboard view
│   │   │   ├── orders/                     # Orders listing
│   │   │   ├── auth/                       # Auth module
│   │   │   │   ├── login/                  # component
│   │   │   │   ├── auth.guard.ts
│   │   ├── shared/                         # Shared components (cards, tables, charts)
│   │   └── core/
│   │       ├── services/                   # Reusable services
│   │       │   ├── order.service.ts
│   │       │   ├── search.service.ts
│   │       └── interfaces/                 # Data models/interfaces
│   │           ├── order.ts
│   │           ├── report-card.ts
│   │           ├── tabLinks.ts
│   │           ├── visit-card.ts
│   └── assets/
├── angular.json
├── package.json
├── tsconfig.json
└── README.md


## ⚙️ Setup Instructions

```bash
# 1. Clone the repository or extract the zip
cd admin-dashboard

# 2. Install dependencies
npm install

# 3. Run the application
ng serve

# 4. Local URL
http://localhost:4200

# 4. Live URL
https://gtsfashionhub.com/#/login

---

## 🧱 Architecture Overview

- **Standalone Components**: Used in place of NgModules to keep the structure modern and lightweight.
- **Feature-based Folders**: Each feature (like dashboard, orders) is organized in its own folder.
- **Service Layer**: Data fetching handled via services (e.g., `AnalyticsService`, `OrdersService`).
- **Reusable Components**: UI components like cards, tables, and charts are shared and reused.
- **Routing**: Configured with route-level lazy loading for performance and code splitting.

---

## 🧪 Scripts

```bash
npm run start    # Run development server
npm run build    # Build for production
npm run watch    # Watch files
npm run test     # Run unit tests
```

---

## 📈 Charts

Implemented using `ng2-charts` or `Chart.js`:
- Line Chart for revenue trend
- Bar Chart for user visits
- Interactive tooltips and labels


---

## 🧾 Notes

- Project scaffolded using Angular CLI.
- SCSS used for component styling.
- Angular Material used for consistent and modern UI components.

---

## 📬 Author

This project was developed as part of a technical task for **DevSolutions**. Built with best practices and modern Angular techniques.
