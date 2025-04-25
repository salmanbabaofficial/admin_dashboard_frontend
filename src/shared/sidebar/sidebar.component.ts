import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TabLinks } from '../../interfaces/tabLinks';
import { faAddressCard, faCartShopping, faGear, faHouse, faMessage, faUsers, faLayerGroup, faStore, faBars, faReceipt, faFileAlt, faCommentDots, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, FaIconComponent, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  faLayerGroup = faLayerGroup;
  faBars = faBars;

  tablinks: TabLinks[] = [
    { id: 1, icon: faHouse, link: 'Dashboard', route: '/dashboard' },
    { id: 2, icon: faCartShopping, link: 'Orders', route: '/orders' },
    { id: 3, icon: faUsers, link: 'Users', route: '/users' },
    { id: 4, icon: faStore, link: 'Items', route: '/items' },
    { id: 5, icon: faReceipt, link: 'Tranactions', route: '/tranactions' },
    { id: 6, icon: faFileAlt, link: 'Reports', route: '/reports' },
    { id: 7, icon: faCommentDots, link: 'Messages', route: '/messages' },
    { id: 8, icon: faLifeRing, link: 'Support', route: '/support' },
    { id: 9, icon: faGear, link: 'Settings', route: '/setting' },
  ]
}
