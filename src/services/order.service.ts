import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = [
    { id: 1, item: 'Iphone 13', qty: 1, date: '2022-01-20', amount: 799, status: 'Pending' },
    { id: 2, item: 'Samsung Galaxy A72', qty: 2, date: '2022-01-21', amount: 550, status: 'Approved' },
    { id: 3, item: 'Xiaomi Mi 11', qty: 1, date: '2022-01-19', amount: 600, status: 'In Process' },
    { id: 4, item: 'OnePlus 9R', qty: 3, date: '2022-01-18', amount: 699, status: 'Approved' },
    { id: 5, item: 'Realme GT Neo 2', qty: 1, date: '2022-01-22', amount: 450, status: 'Pending' },
    { id: 6, item: 'Iphone 14', qty: 1, date: '2022-01-20', amount: 899, status: 'Pending' },
    { id: 7, item: 'Samsung Galaxy S21 FE', qty: 1, date: '2022-01-23', amount: 699, status: 'In Process' },
    { id: 8, item: 'Vivo V23', qty: 2, date: '2022-01-24', amount: 399, status: 'Approved' },
    { id: 9, item: 'Oppo Reno 6', qty: 1, date: '2022-01-21', amount: 499, status: 'Approved' },
    { id: 10, item: 'Motorola Edge 20', qty: 1, date: '2022-01-25', amount: 579, status: 'Pending' },
    { id: 11, item: 'Asus ROG Phone 5', qty: 1, date: '2022-01-26', amount: 999, status: 'Approved' },
    { id: 12, item: 'Google Pixel 6', qty: 1, date: '2022-01-27', amount: 799, status: 'Approved' },
    { id: 13, item: 'Nokia X20', qty: 2, date: '2022-01-18', amount: 349, status: 'In Process' },
    { id: 14, item: 'Iphone SE 2022', qty: 1, date: '2022-01-29', amount: 429, status: 'Pending' },
    { id: 15, item: 'Samsung M52', qty: 1, date: '2022-01-30', amount: 489, status: 'In Process' },
    { id: 16, item: 'OnePlus Nord CE', qty: 1, date: '2022-01-28', amount: 329, status: 'Approved' },
    { id: 17, item: 'Xiaomi Poco X4 Pro', qty: 1, date: '2022-01-30', amount: 279, status: 'Pending' },
    { id: 18, item: 'Infinix Zero 5G', qty: 1, date: '2022-01-20', amount: 299, status: 'Approved' },
    { id: 19, item: 'Lava Blaze 5G', qty: 1, date: '2022-01-21', amount: 199, status: 'In Process' },
    { id: 20, item: 'Iphone 13 Mini', qty: 1, date: '2022-01-19', amount: 729, status: 'Pending' },
    { id: 21, item: 'Samsung Galaxy Z Flip', qty: 1, date: '2022-01-31', amount: 1099, status: 'Approved' },
    { id: 22, item: 'Sony Xperia 10 III', qty: 1, date: '2022-01-17', amount: 599, status: 'In Process' },
    { id: 23, item: 'Realme Narzo 50A', qty: 2, date: '2022-01-25', amount: 229, status: 'Pending' },
    { id: 24, item: 'Micromax IN Note 1', qty: 1, date: '2022-01-22', amount: 249, status: 'Approved' },
    { id: 25, item: 'Oppo A95', qty: 1, date: '2022-01-24', amount: 379, status: 'Approved' },
    { id: 26, item: 'Vivo Y73', qty: 1, date: '2022-01-29', amount: 329, status: 'Approved' },
    { id: 27, item: 'Xiaomi Redmi Note 11', qty: 1, date: '2022-01-27', amount: 199, status: 'Pending' },
    { id: 28, item: 'Infinix Note 12', qty: 2, date: '2022-01-23', amount: 229, status: 'Approved' },
    { id: 29, item: 'Samsung Galaxy A52s', qty: 1, date: '2022-01-26', amount: 449, status: 'In Process' },
    { id: 30, item: 'Iphone 13 Pro Max', qty: 1, date: '2022-01-31', amount: 1099, status: 'Approved' }
  ];


  getRecentOrders(): Observable<Order[]> {
    return of(this.orders.slice(0, 3));
  }

  getAllOrders(): Observable<Order[]> {
    return of(this.orders);
  }
}
