import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showHeader: boolean = false;

  constructor(public router: Router) { }

  toggleHeader() {
    this.showHeader = !this.showHeader;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
