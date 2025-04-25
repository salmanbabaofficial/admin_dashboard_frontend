export interface Order {
  id: number;
  item: string;
  qty: number;
  date: string;
  amount: number;
  status: 'Pending' | 'Approved' | 'In Process';
}
