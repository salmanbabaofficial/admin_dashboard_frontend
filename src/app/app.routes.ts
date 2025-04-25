import { Route } from '@angular/router';
import { authGuard } from '../auth/auth.guard';

export const APP_ROUTES: Route[] = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('../auth/login/login.component').then((m) => m.LoginComponent)},
    { path: 'dashboard', loadComponent: () => import('./tabs/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [authGuard] },
    { path: 'orders', loadComponent: () => import('./tabs//orders/orders.component').then(m => m.OrdersComponent), canActivate: [authGuard] },
    { path: 'users', loadComponent: () => import('./tabs/users/users.component').then(m => m.UsersComponent), canActivate: [authGuard] },
    { path: 'items', loadComponent: () => import('./tabs/items/items.component').then(m => m.ItemsComponent), canActivate: [authGuard] },
    { path: 'tranactions', loadComponent: () => import('./tabs/tranactions/tranactions.component').then(m => m.TranactionsComponent), canActivate: [authGuard] },
    { path: 'reports', loadComponent: () => import('./tabs/reports/reports.component').then(m => m.ReportsComponent), canActivate: [authGuard] },
    { path: 'messages', loadComponent: () => import('./tabs/messages/messages.component').then(m => m.MessagesComponent), canActivate: [authGuard] },
    { path: 'support', loadComponent: () => import('./tabs/support/support.component').then(m => m.SupportComponent), canActivate: [authGuard] },
    { path: 'setting', loadComponent: () => import('./tabs/setting/setting.component').then(m => m.SettingComponent), canActivate: [authGuard] },
    { path: '**', redirectTo: '' },
];
