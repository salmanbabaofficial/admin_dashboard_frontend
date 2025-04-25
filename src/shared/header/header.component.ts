import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faGear, faBell, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../../services/search.service';
import { NgIf, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FaIconComponent, NgIf, TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faBars = faBars;
  faGear = faGear;
  faBell = faBell;
  faAngleDown = faAngleDown;
  faSearch = faSearch
  userName = '';

  constructor(public searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('username') || 'Guest';
  }
  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchService.setSearch(input.value);
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    sessionStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

}
