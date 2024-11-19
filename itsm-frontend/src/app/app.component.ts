import { Component } from '@angular/core';

export interface NavLink {
  label: string;
  path: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ticket Management';
  
  navLinks: NavLink[] = [
    { label: 'Dashboard', path: '/' },
    { label: 'Add Ticket', path: '/add-ticket' }
  ];
}
