import { Component } from '@angular/core';
import {
  Ticket,
  TicketService,
  TicketStatus,
} from '../../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css',
})
export class TicketFormComponent {
  ticket: Ticket = {
    title: '',
    description: '',
    status: TicketStatus.Open,
  };

  constructor(private ticketService: TicketService, private router: Router) { }

  onSubmit(): void {
    this.ticketService.addTicket(this.ticket).subscribe(() => {
      console.log('Ticket added');
      this.router.navigate(['/']);
    });
  }
}
